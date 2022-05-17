import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Modal } from "../Context/Modal";

import { ReactComponent as ThreeDotsIcon } from "../../static/svg/threedots.svg";
import { ReactComponent as PencilIcon } from "../../static/svg/pencil.svg";
import EditCustomerInfo from "./EditCustomerInfo";
import EditCustomerMap from "./EditCustomerMap";
import GoogleMap from "../GoogleMap";
import { getBusinessesDetails } from "../../store/business";

const SingleCustomerDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[user?.business_id]);
  const customer = business?.customers.filter(
    (customer) => customer.id === +id
  )[0];

  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showMapInfoModal, setShowMapInfoModal] = useState(false);

  useEffect(() => {
    dispatch(getBusinessesDetails());
  }, [showInfoModal, showMapInfoModal]);

  return (
    <div className="flex_column customer_main_container">
      <div className="flex_row title_container">
        <h1>{customer?.display_name}</h1>
        <div>
          <ThreeDotsIcon />
        </div>
      </div>
      <div className="flex_row customer_edit_inner_container">
        <div className="flex_column left_customer_edit_column">
          <div className="customer_edit_info_card flex_column">
            <div className="flex_column customer_edit_created_container">
              <p>Created</p>
              <h5>{customer?.created_at}</h5>
            </div>
            <div className="flex_row customer_edit_info_container">
              <h3>Contact Info</h3>
              <div onClick={() => setShowInfoModal(true)}>
                <PencilIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="flex_column right_customer_edit_column">
          <div className="customer_edit_map_card">
            <GoogleMap
              coords={{ lat: +customer?.coords[0], lng: +customer?.coords[1] }}
              size={{ width: "820px", height: "200px" }}
              zoom={true}
              zoomNum={13}
            />
            <div>
              <div className="flex_row edit_address_container">
                <div className="flex_column ">
                  <h4>{customer?.street}</h4>
                  <p>
                    {customer?.city} {customer?.state} {customer?.county}{" "}
                    {customer?.postal_code}
                  </p>
                </div>
                <div onClick={() => setShowMapInfoModal(true)}>
                  <ThreeDotsIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showInfoModal && (
        <Modal onClose={() => setShowInfoModal(false)}>
          <EditCustomerInfo
            customer={customer}
            closeModal={() => setShowInfoModal(false)}
          />
        </Modal>
      )}
      {showMapInfoModal && (
        <Modal onClose={() => setShowMapInfoModal(false)}>
          <EditCustomerMap
            customer={customer}
            closeModal={() => setShowMapInfoModal(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default SingleCustomerDetails;
