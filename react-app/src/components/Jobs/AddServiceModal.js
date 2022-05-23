import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as XIcon } from "../../static/svg/xicon.svg";
import { ReactComponent as BackArrowIcon } from "../../static/svg/backarrow.svg";
import { getCategoriesDetails } from "../../store/category";

const AddServiceModal = ({ setShowServiceModal, setJobIds, jobIds }) => {
  const user = useSelector((state) => state.session.user);
  const allCategoriesArr = useSelector((state) =>
    Object.values(state.categories)
  );
  const services = useSelector((state) => state.services);
  const categoriesArr = [];
  const dispatch = useDispatch();

  allCategoriesArr
    .filter((category) => category.business_id === user?.business_id)
    .forEach((category) => categoriesArr.push(category));

  const [selectedCategory, setSelectedCategory] = useState("");

  const removeId = (id) => {
    const newArr = [...jobIds];

    setJobIds(jobIds.splice(jobIds.indexOf(id), 1));
  };

  useEffect(() => {
    dispatch(getCategoriesDetails());
  }, [selectedCategory, jobIds, dispatch]);
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
            {categoriesArr?.map((category) => (
              <div
                key={category?.id}
                className="flex_row nj_title_category"
                onClick={() => setSelectedCategory(category)}
              >
                {category?.name}
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
              <h1>Service Name: {selectedCategory?.name}</h1>
            </div>

            <div onClick={setShowServiceModal}>
              <XIcon />
            </div>
          </div>
          <div className="flex_column nj_title_service_container">
            {selectedCategory?.services.map((service) => (
              <div
                className="flex_row nj_service_tiles align_item"
                key={service?.id}
              >
                <div className="flex_column">
                  <p>{service?.name}</p>
                  <p>${service?.price}</p>
                  <p>{service?.description}</p>
                </div>
                {!jobIds.includes(service?.id) ? (
                  <button
                    className="nj_add_button"
                    onClick={() => setJobIds([...jobIds, service?.id])}
                  >
                    Add
                  </button>
                ) : (
                  <button
                    className="nj_remove_button"
                    onClick={() =>
                      setJobIds(jobIds.filter((id) => +id !== +service?.id))
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
