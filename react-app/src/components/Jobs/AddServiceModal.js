import React, { useState } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as XIcon } from "../../static/svg/xicon.svg";
import { ReactComponent as BackArrowIcon } from "../../static/svg/backarrow.svg";

const AddServiceModal = ({ setShowServiceModal, setJobIds, jobIds }) => {
  const user = useSelector((state) => state.session.user);
  const allCategoriesArr = useSelector((state) =>
    Object.values(state.categories)
  );
  const services = useSelector((state) => state.services);
  const categoriesArr = [];

  allCategoriesArr
    .filter((category) => category.business_id === user?.business_id)
    .forEach((category) => categoriesArr.push(category));

  const [selectedCategory, setSelectedCategory] = useState("");

  const removeId = (id) => {
    const newArr = [...jobIds];

    setJobIds(jobIds.splice(jobIds.indexOf(id), 1));
  };
  return (
    <div className="modal_container flex_column">
      {!selectedCategory ? (
        <>
          <div className="flex_row align_item nj_service_box_title">
            <h1>Category</h1>
            <div onClick={setShowServiceModal}>
              <XIcon />
            </div>
          </div>
          <div className="flex_row nj_title_category_container">
            {categoriesArr.map((category) => (
              <div
                key={category.id}
                className="flex_row nj_title_category"
                onClick={() => setSelectedCategory(category)}
              >
                {category.name}
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex_row align_item nj_service_box_title">
            <div className="flex_row align_item">
              <div
                onClick={() => setSelectedCategory("")}
                className="nj_back_arrow_div"
              >
                <BackArrowIcon />
              </div>
              <h1>Service Name: {selectedCategory.name}</h1>
            </div>

            <div onClick={setShowServiceModal}>
              <XIcon />
            </div>
          </div>
          <div className="flex_column nj_title_service_container">
            {selectedCategory.service_ids.map((serviceId) => (
              <div
                className="flex_row nj_service_tiles align_item"
                key={serviceId}
              >
                <div className="flex_column">
                  <p>{services[serviceId].name}</p>
                  <p>${services[serviceId].price}</p>
                  <p>{services[serviceId].description}</p>
                </div>
                {!jobIds.includes(services[serviceId].id) ? (
                  <button
                    className="nj_add_button"
                    onClick={() =>
                      setJobIds([...jobIds, services[serviceId].id])
                    }
                  >
                    Add
                  </button>
                ) : (
                  <button
                    className="nj_remove_button"
                    onClick={() =>
                      setJobIds(
                        jobIds.filter((id) => +id !== +services[serviceId].id)
                      )
                    }
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AddServiceModal;
