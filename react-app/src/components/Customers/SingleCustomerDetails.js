import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Modal } from "../Context/Modal";

import { ReactComponent as ThreeDotsIcon } from "../../static/svg/threedots.svg";
import { ReactComponent as PencilIcon } from "../../static/svg/pencil.svg";
import EditCustomerInfo from "./EditCustomerInfo";
import EditCustomerMap from "./EditCustomerMap";
import GoogleMap from "../GoogleMap";

const SingleCustomerDetails = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses[user?.id]);
  const customer = business?.customers.filter(
    (customer) => customer.id === +id
  )[0];

  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showMapInfoModal, setShowMapInfoModal] = useState(false);

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
            <ul
              class="MuiList-root MuiMenu-list MuiList-padding"
              role="listbox"
              tabindex="-1"
              style="padding-right: 0px; width: calc(100% + 0px);"
            >
              {/*
                Heating &amp; Air Conditioning

                Carpet Cleaning
              Home Cleaning

                Plumbing
                Electrical
                Garage
                Handyman
                Window &amp; Exterior Cleaning
                Automotive
                General Contractor
                Air Duct Cleaning
                Pest Control
                Painting
                Accountant
                Alternative Therapy
                Appraisal
                Audio &amp; TV
                Baby Proof
                Barber
                Business Services
                Cabinetry
                Carpet Repair
                Concrete &amp; Asphalt
                Cooking
                Credit Counselor
                Deck &amp; Patio
                Demolition
                Document Storage &amp; Destruction */}
              {/* Doors<span class="MuiTouchRipple-root"></span>
              </li> */}
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_a0d8277cf93241e7bb619909947f1b81"
              >
                Drywall<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_b4c7461a427c4af98f56f1c346f40147"
              >
                Fencing<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_d0acc4f1adc347a38ffbff45aa1e9528"
              >
                Financial Planner<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_65de254827054c5db2b7a01fda5e02a3"
              >
                Fireplace &amp; Chimney<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_9413be524fea4742b4fc26ca1d5fbf74"
              >
                Fitness<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_ef2d286a849f4dfea559fd5f33b23c4f"
              >
                Fleets &amp; Trucks<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_51912a5622f14dffbc921bcfe56f1f26"
              >
                Flooring<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_7d1fb228c98a47b8976bd3baced5c4df"
              >
                Furniture &amp; Upholstery
                <span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_f6cc936d07f04d04918a5e06965a56f3"
              >
                Glass<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_4bbc9a867afa47f9b6a3e41b456ac6b2"
              >
                Graphics &amp; Printing<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_ca35c68c5c6b4fb19bd81ed8d0e6ea63"
              >
                Gutters<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_b02bf63fde934e9992553d99dd77a2fd"
              >
                Health &amp; Beauty<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_8c2b8b98aa794662ad3fe39dcf5e54bb"
              >
                Home Inspection<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_4505f87eb6494c648118923eedf68d95"
              >
                Install &amp; Assemble<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_1c47473763df49ba8696fbb5ad6c4f10"
              >
                Insurance<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_c635453f8d31451da4b2039464eed9ff"
              >
                Interior &amp; Surface Cleaning
                <span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_ddf8835196c9457d90af263be411cc43"
              >
                Janitorial<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_afe1463a10be44f197916862be0ca691"
              >
                Junk Removal<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_559a678ef60945b3b46053291a171d28"
              >
                Laundry<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_7b643ce51c694c5d90c84180837cb2f9"
              >
                Lawyer<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_715de24bd8c646d9bed92491e2a868c3"
              >
                Lender<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_d13d2303a0094ea4a94b666f1367bbb3"
              >
                Lighting<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_e7d9c7794e3a4ed89f12d815ad5d5e1b"
              >
                Locksmith<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_3911bf0bd05e4f4290a696f1c3573365"
              >
                Marine Services<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_a301becee2924664b0fd26b789c2988d"
              >
                Massage<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_70a36304f3a04f7aa596c378ddb66db2"
              >
                Medical<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_3f0fdf160f92431e97829758466963b4"
              >
                Mortgage Broker<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_5315a563dc634ba398ea35d545cfd03d"
              >
                Moving<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_304a5062174e4cbd9225544dd3739d70"
              >
                Music &amp; Singing<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_5e5d8b78831a4611a3b115ff9ce8f81d"
              >
                Natural Stone<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_c8995900897d456d82619f2161b6d509"
              >
                Neighborhood Chores<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_1b96a39c9cfc405b9b6a4db7eb85cd41"
              >
                Notary<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_98dc8cff377344b983813e7055e09c29"
              >
                Organization &amp; Interior Design
                <span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_3e8594116c854897b96fa7bc2893aa70"
              >
                Parties<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_62478b2ca5ab444aa7bc5d7f63cdc32f"
              >
                Pets<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_3e69a904c95045ec9f253d8a4540b127"
              >
                Photography<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_cf12af4b37f74ba49ad78f19a6b38731"
              >
                Pool &amp; Spa<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_b9613f32edc644bfa6c7e09b40798b8d"
              >
                Property Manager<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_6aebd2d8f78d4947a95bb3b93f937c46"
              >
                Real Estate<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_2777f3e2a62941f88de33864564e30cb"
              >
                Restoration<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_814d2d8f2bc045bdae22009993e41dfb"
              >
                Regulatory &amp; Environmental
                <span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_708545d48f73418082326ea06a270313"
              >
                Roof &amp; Attic<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_8da59a2f89f64758b35aec56e2b1bf61"
              >
                Rug Cleaning<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_2850e48bbedc439d9948ed1dbeb2679f"
              >
                Security<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_73f029b406ca4426a54f540e580b32c8"
              >
                Sewer &amp; Septic<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_2dd9cf8f4dd24587901eac79ee642d97"
              >
                Siding<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_ae5e93d0e4064043a523ab62e798f444"
              >
                Smart Home<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_3641c8756fdc4539a610981e90f13a1a"
              >
                Snow Removal<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_e26bc85903974fa3b93a39be626aeebb"
              >
                Solar &amp; Energy<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_6a36128ec08b4d75b82491a80bc2912a"
              >
                Tax Planner<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_c46ba9b72f8d4a5fa6f782f940ae2261"
              >
                Tech Help<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_43c81f6a9e6247aa814419c7502cb5d6"
              >
                Transportation<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_4f31685a62b44c3fb5ef03a3ed78e33b"
              >
                Device Repair<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_1cb33e156e674d61b71e55293c1d452c"
              >
                Tile &amp; Grout<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_f4af89a0e2ed4c1098b600570241ce8c"
              >
                Tree Services<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_d4c30fd641274f748a7880bcb4139121"
              >
                Tutoring<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_c100611354cd457481ef14d114360e49"
              >
                Water Heater<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_34edb832a2e243b2a158599cf7ec7962"
              >
                Water Transfer Printing<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_e99a9a3be3d14b0ea20aaa6cc1572b11"
              >
                Water Treatment<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_3c0e0b999db341b29244398b4eb055bb"
              >
                Well Pumps<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_161e03423c9144f0be7274185243e639"
              >
                Wildlife Control<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_b7b17efe5ca7461d8055ad4cbfd3dc31"
              >
                Windows<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_0a952a0329464388887941059f24ce5f"
              >
                Wine<span class="MuiTouchRipple-root"></span>
              </li>
              <li
                class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
                tabindex="-1"
                role="option"
                aria-disabled="false"
                data-value="ind_f8f08d3f3286495184fe0454af8def75"
              >
                Caulking &amp; Sealants<span class="MuiTouchRipple-root"></span>
              </li>
            </ul>
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
          <EditCustomerMap customer={customer} />
        </Modal>
      )}
    </div>
  );
};

export default SingleCustomerDetails;
