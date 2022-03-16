import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import useI18n from "hooks/useI18n";
import Link from "next/link";
import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMdMail,
} from "react-icons/io";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
  const i18n = useI18n();

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row max-w-7xl w-full mx-auto py-10 px-5 xl:py-14 xl:px-8 2xl:px-14">
        <div className="p-8 bg-white rounded-md shadow-md">
          {logo}
          <div className="flex flex-col my-6">
            <span className="font-semibold text-heading mb-2">
              {i18n.contact.information_address}
            </span>
            <span className="text-sm text-body">Nha Be, Ho Chi Minh City</span>
          </div>
          <div className="flex flex-col mb-6">
            <span className="font-semibold text-heading mb-2">
              {i18n.contact.information_phone}
            </span>
            <span className="text-sm text-body">+84 333 571 180</span>
          </div>
          <div></div>
          <div className="flex flex-col mb-6">
            <span className="font-semibold text-heading mb-2">
              {i18n.contact.information_email}
            </span>
            <span className="text-sm text-body">
              Tanpro01635147801@gmail.com
            </span>
          </div>

          <div className="flex flex-col mb-3">
            <span className="font-semibold text-heading mb-2">
              {i18n.contact.information_follow_us}
            </span>
            <div className="w-2/3 flex justify-between py-1">
              <Link href="https://www.facebook.com/nguyentan2808/" passHref>
                <a target="_blank">
                  <IoLogoFacebook className="text-xl opacity-30" />
                </a>
              </Link>
              <Link
                href="https://www.linkedin.com/in/nguy%E1%BB%85n-t%C3%A2n-65052b228/"
                passHref
              >
                <a target="_blank">
                  <IoLogoLinkedin className="text-xl opacity-30" />
                </a>
              </Link>
              <Link href="https://www.facebook.com/nguyentan2808/" passHref>
                <a target="_blank">
                  <IoLogoTwitter className="text-xl opacity-30" />
                </a>
              </Link>
              <Link href="https://www.instagram.com/nguyentan.tan_/" passHref>
                <a target="_blank">
                  <IoLogoInstagram className="text-xl opacity-30" />
                </a>
              </Link>
              <Link href="mailto:tanpro01635147801@gmail.com" passHref>
                <a target="_blank">
                  <IoMdMail className="text-xl opacity-30" />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full p-8 bg-white rounded-md md:ml-16 mt-6 md:mt-0 shadow-md">
          <h3 className="mb-7 text-xl md:text-2xl font-body font-bold text-heading">
            {i18n.contact.form_header}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <FormControl>
              <FormLabel htmlFor="email">{i18n.contact.form_name}</FormLabel>
              <Input id="name" type="text" />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">{i18n.contact.form_email}</FormLabel>
              <Input id="email" type="email" />
            </FormControl>
          </div>
          <div className="grid grid-cols-1 mb-6">
            <FormControl>
              <FormLabel htmlFor="email">{i18n.contact.form_subject}</FormLabel>
              <Input id="name" type="text" />
            </FormControl>
          </div>
          <div className="grid grid-cols-1 mb-6">
            <FormControl>
              <FormLabel htmlFor="email">
                {i18n.contact.form_description}
              </FormLabel>
              <Textarea size="md" resize="vertical" />
            </FormControl>
          </div>
          <div className="grid grid-cols-1 mb-6">
            <Checkbox
              defaultIsChecked
              colorScheme="teal"
              focusBorderColor="teal"
            >
              {i18n.contact.form_accept_notify}
            </Checkbox>
          </div>
          <Button className="bg-red-500" onClick={() => toast("oke")}>
            {i18n.contact.form_submit_btn}
          </Button>
        </div>
      </div>
    </div>
  );
};

const logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="299.34"
    height="231.666"
    viewBox="0 0 299.34 231.666"
  >
    <defs>
      <clipPath id="clip-path">
        <path
          id="Path_22684"
          data-name="Path 22684"
          d="M1299.066,1516.284c.766,3.966.586,9.287.73,13.4a74.206,74.206,0,0,1-.37,12.159c6.309.885,12.191.741,18.561.667,2.7-.031,5.4-.064,8.093-.263,4.309-.319,8.573-1.065,12.861-1.6q6.082-.758,12.219-.948a236.421,236.421,0,0,1,1.315-30.564c1.2-9.987,3.477-20.239,3.441-30.308-.012-3.283.292-8.979-3.5-10.461-3.394-1.325-6.836-2.519-10.283-3.7a51.287,51.287,0,0,0-9.825-2.5,43.534,43.534,0,0,0-14.531.684,89.659,89.659,0,0,0-12.764,3.844c-1.535.568-3.624.944-4.851,2-1.418,1.223-2.214,3.707-2.925,5.38a56.668,56.668,0,0,0-4.332,17.721,31.665,31.665,0,0,0,.245,8.8c.979,4.593,3.493,8.633,5.157,12.978A16.038,16.038,0,0,1,1299.066,1516.284Z"
          transform="translate(-1292.713 -1461.841)"
          fill="#009e7f"
        />
      </clipPath>
    </defs>
    <g
      id="Group_36309"
      data-name="Group 36309"
      transform="translate(-26.438 -33.594)"
    >
      <path
        id="Path_22667"
        data-name="Path 22667"
        d="M745.593,684.164c-5.69,8.09-10.08,19.1-7.034,29.257,3.037,10.129,12.75,16.374,16.995,25.995,2.4,5.438,2.463,11.417,2.554,17.253.119,7.64-1.374,15.754,3.79,22.212,3.055,3.819,7.664,6.076,12.324,7.558,9.36,2.977,19.167-5.953,27.481-.33,13.659,9.239,30.434,8.6,46.711,7.6a105.748,105.748,0,0,0,24.349-4.473c9.187-2.8,17.353,6.434,26.6,3.775,16.032-4.608,37.953-4.671,47.335-20.891,6.316-10.921,8.5-24.418,3.591-36.317-2.336-5.657-6.8-9.979-9.335-15.533a35.633,35.633,0,0,1-2.111-24.576q.146-.5.3-1c2.449-7.622,7.38-14.176,9.42-21.934,4.21-16.018-5.093-32.954-17.322-43.25a51.777,51.777,0,0,0-16.943-9.869c-17.056-5.6-36.007.881-53.115-4.535-13.124-4.155-23.9-14.953-37.272-18.076-10.276-2.4-21.381.162-30.111,6.434s-15.064,16.088-17.952,26.9c-2.676,10.017-2.592,21.02-7.337,30.119-4.06,7.785-11.584,11.986-17.693,17.633A38.073,38.073,0,0,0,745.593,684.164Z"
        transform="translate(-662.504 -531.491)"
        fill="#cef4ec"
        opacity="0.43"
      />
      <path
        id="Path_22668"
        data-name="Path 22668"
        d="M753.852,737.6c-7.441-2.666-15.594-1.9-23.5-2.013s-20.237-1.4-23.213-10.173c-3.15-9.286,1.416-18.916,1.455-28.3a21.713,21.713,0,0,0-1.147-7.58c-4.142-11.289-18.017-14.023-22.878-25.272-3.631-8.4-1.756-18.438,3.018-26.249,4.147-6.785,10.223-12.119,16.652-16.68,5.854-4.152,10.33-10.862,12.625-17.681,4.287-12.738,1.655-26.664,6.46-39.085,4.3-11.126,12.547-20.551,22.839-25.53,17.961-8.69,39.189-.958,51.992,13.907a39.737,39.737,0,0,0,26.786,13.425c19.516,1.6,39.845-9.01,57.925,2.964,9.215,6.1,15.728,16.922,17.757,28.338,1.143,6.43,1.012,13.585-1.47,19.655-2.443,5.974-6.656,10.848-10.275,16.01-6.015,8.577-9.306,20.041-3.681,29.7,2.459,4.223,6.013,7.678,9.382,11.218a37.512,37.512,0,0,1,8.85,34.487c-3.371,13.715-14.058,22.719-27.977,24.442-10.3,1.275-21.7-.391-31.039,5.053"
        transform="translate(-614.697 -478.593)"
        fill="none"
        stroke="#c3e5df"
        strokeMiterlimit="10"
        strokeWidth="1"
      />
      <g
        id="Group_36309-2"
        data-name="Group 36309"
        transform="translate(56.848 119.549)"
      >
        <path
          id="Path_22669"
          data-name="Path 22669"
          d="M613.77,1021.4h-9.737a7.549,7.549,0,0,0-7.527,7.527h0a7.532,7.532,0,0,0,3.263,6.192v5.3l5.418-3.963h8.583a7.549,7.549,0,0,0,7.527-7.526h0A7.549,7.549,0,0,0,613.77,1021.4Z"
          transform="translate(-596.506 -1021.398)"
          fill="#89d8c9"
        />
        <circle
          id="Ellipse_129"
          data-name="Ellipse 129"
          cx="1.142"
          cy="1.142"
          r="1.142"
          transform="translate(5.799 6.384)"
          fill="#fff"
        />
        <circle
          id="Ellipse_130"
          data-name="Ellipse 130"
          cx="1.142"
          cy="1.142"
          r="1.142"
          transform="translate(11.253 6.384)"
          fill="#fff"
        />
        <circle
          id="Ellipse_131"
          data-name="Ellipse 131"
          cx="1.142"
          cy="1.142"
          r="1.142"
          transform="translate(16.707 6.384)"
          fill="#fff"
        />
      </g>
      <g
        id="Group_36310"
        data-name="Group 36310"
        transform="translate(206.108 53.186)"
      >
        <rect
          id="Rectangle_3655"
          data-name="Rectangle 3655"
          width="22.442"
          height="14.974"
          rx="3"
          fill="#89d8c9"
        />
        <path
          id="Path_22670"
          data-name="Path 22670"
          d="M1755.426,511.1l9.826,9.527a1.508,1.508,0,0,0,2.066,0l9.825-9.527"
          transform="translate(-1755.064 -510.621)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <line
          id="Line_8"
          data-name="Line 8"
          y1="6.193"
          x2="8.062"
          transform="translate(0.362 8.298)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
        <line
          id="Line_9"
          data-name="Line 9"
          x1="8.062"
          y1="6.193"
          transform="translate(14.018 8.298)"
          fill="none"
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="1"
        />
      </g>
      <path
        id="Path_22671"
        data-name="Path 22671"
        d="M1315.26,1051.171c-7.267,2.571-16.031,2.308-22.643-1.933-6.5-4.169-12.421-7.18-20.418-7.034-7.146.13-13.055,3.993-19.975,4.815-5.489.652-11.065-1.741-15.043-5.579-3.883-3.746-6.462-9.458-4.774-14.583.884-2.683,2.817-4.9,3.919-7.5,2.543-6-4.153-9.618-2.488-15.933,1.416-5.37,7.309-9.2,7.222-14.754-.065-4.065-3.211-7.216-4.32-10.977a14.927,14.927,0,0,1,1.1-11.511,13.755,13.755,0,0,1,6.475-5.781c2.423-1.033,5.13-1.052,7-3.169,3.339-3.773,4.564-7.863,9.145-10.621,3.879-2.336,9-2.484,13.45-2.076,9.887.906,19.483,6.125,25.052,14.437,1.974,2.946,3.4,5.96,3.448,9.461.054,3.827.053,7.677,2.4,10.93,1.969,2.732,5.129,4.33,8.263,5.563s6.418,2.23,9.168,4.172,4.936,5.11,4.615,8.463c-.269,2.805-2.21,5.243-2.469,8.05-.47,5.1,4.446,8.81,7.477,12.942a20.106,20.106,0,0,1,1.753,20.392c-3.677,7.4-10.358,9.066-17.358,11.85Q1315.766,1050.992,1315.26,1051.171Z"
        transform="translate(-1093.002 -834.756)"
        fill="#755846"
      />
      <path
        id="Path_22672"
        data-name="Path 22672"
        d="M1369.309,1159.731c.258,6.271-1.2,10.981-6.931,14.082-4.568,2.47-10.037,3.281-15.078,3.4-8.454.208-17.874-1.972-24.2-7.91a6.266,6.266,0,0,1-2.332-3.971c-.075-1.429.711-2.776.78-4.205.117-2.411-1.757-4.408-2.6-6.671-1.107-2.99-.354-6.327.64-9.356s2.238-6.087,2.089-9.271c-.194-4.13-2.676-7.737-4.663-11.363s-3.551-8.038-1.853-11.808a8.441,8.441,0,0,1,6.515-4.7c2.881-.32,5.469,2.972,7.315,4.786a45.206,45.206,0,0,0,8.226,6.4c4.117,2.5,8.636,4.34,12.508,7.2,2.343,1.732,4.856,4.11,5.975,6.869,1.26,3.109-.947,6.119,1.722,8.979,1.722,1.845,4.366,2.473,6.448,3.9C1368.333,1149.151,1369.106,1154.78,1369.309,1159.731Z"
        transform="translate(-1164.906 -977.22)"
        fill="#5e4130"
      />
      <path
        id="Path_22673"
        data-name="Path 22673"
        d="M1303.728,1037.435c4.962.633,10.188.2,14.619-2.122,5.642-2.953,8.465-8.366,8.582-14.595.085-4.512-.789-9.215-3.512-12.813-2.962-3.912-7.925-6.317-9.766-10.865-1.193-2.945-.907-6.955,1.452-9.234,1.5-1.45,2.676-3.086,2.483-5.261-.283-3.2-2.624-6.273-5.238-8-3.834-2.534-8.6-3.461-13.088-4.031-3.038-.386-6.065-1.24-7.005-4.512a24.087,24.087,0,0,1-.5-5.442c-.2-3.869-.485-7.738-1.063-11.57-.666-4.418-3.535-8.692-6.735-11.736q-.689-.656-1.429-1.255c-8.25-6.683-23.521-9.051-32.62-2.857a14.1,14.1,0,0,0-5.968,9.038c-.462,2.469-1.131,3-3.544,3.75-4.383,1.36-9.356,2.325-12.837,5.54a12.025,12.025,0,0,0-3.612,9.976c.463,4.664,3.723,6.9,6.058,10.591,2.384,3.773.51,8.521-2.259,11.635-2.132,2.4-5.157,4.15-6.362,7.124-1.108,2.736-.374,5.9.964,8.531.542,1.066,1.18,2.084,1.66,3.18a12.323,12.323,0,0,1-.4,10.548"
        transform="translate(-1083.389 -821.856)"
        fill="none"
        stroke="#755846"
        strokeMiterlimit="10"
        strokeWidth="6"
      />
      <g
        id="Group_36311"
        data-name="Group 36311"
        transform="translate(166.026 158.68)"
      >
        <path
          id="Path_22674"
          data-name="Path 22674"
          d="M1464.374,1355.932c-3.8,4.317-11.1,4.66-16.206,2.894-3.477-1.2-5.935-3.944-6.008-7.713-.082-4.214,3.614-7.208,4.548-11.135a26.435,26.435,0,0,0,.423-6.786c-.064-2.644-.083-5.3-.21-7.935a28.064,28.064,0,0,1,7.518-.716c2.3.095,4.6-.145,6.9-.01a.81.81,0,0,1,.516.153.74.74,0,0,1,.171.5c.308,3.57.005,7.185.247,10.762a18.016,18.016,0,0,0,2.883,9.318A8.7,8.7,0,0,1,1464.374,1355.932Z"
          transform="translate(-1442.158 -1324.488)"
          fill="#f8a17a"
        />
      </g>
      <g
        id="Group_36312"
        data-name="Group 36312"
        transform="translate(169.424 118.828)"
      >
        <path
          id="Path_22675"
          data-name="Path 22675"
          d="M1468.479,1017.99a17.147,17.147,0,0,1,7.97-2.158,29.666,29.666,0,0,1,8.28.925,25.5,25.5,0,0,1,13.805,9.032,22.815,22.815,0,0,1,3.8,7.481,28.77,28.77,0,0,1,.914,8.338c-.028,2.786-.226,5.556-.134,8.3a14.912,14.912,0,0,0,.64,3.989,6.261,6.261,0,0,0,2.158,3.193,7.522,7.522,0,0,0,3.694,1.273c1.343.159,2.745.167,4.144.354a18.881,18.881,0,0,1,8,2.62,6.416,6.416,0,0,1,2.841,7.593,29.815,29.815,0,0,1-1.769,3.81,12.14,12.14,0,0,0-1.032,3.9,18.173,18.173,0,0,0,1.4,8,74.764,74.764,0,0,1,2.748,7.87,16.785,16.785,0,0,1,.5,4.161,13.1,13.1,0,0,1-.729,4.116,14.089,14.089,0,0,1-4.85,6.643,13.7,13.7,0,0,0,4.7-14.826,75.938,75.938,0,0,0-2.841-7.789,18.714,18.714,0,0,1-1.542-8.227,12.77,12.77,0,0,1,1.033-4.119,30.83,30.83,0,0,0,1.717-3.73,5.718,5.718,0,0,0-2.584-6.8,18.191,18.191,0,0,0-7.689-2.467c-1.351-.176-2.731-.177-4.144-.336a8.254,8.254,0,0,1-4.075-1.408,7.045,7.045,0,0,1-2.422-3.588,15.638,15.638,0,0,1-.66-4.2c-.081-2.806.131-5.576.169-8.335a28.093,28.093,0,0,0-.852-8.144,22.993,22.993,0,0,0-3.626-7.3,25.055,25.055,0,0,0-13.419-9.026,29.387,29.387,0,0,0-8.176-1.1A17.047,17.047,0,0,0,1468.479,1017.99Z"
          transform="translate(-1468.479 -1015.813)"
          fill="#8e6751"
        />
      </g>
      <g
        id="Group_36313"
        data-name="Group 36313"
        transform="translate(84.176 225.129)"
      >
        <path
          id="Path_22676"
          data-name="Path 22676"
          d="M851.691,1852.852c-1.014-.344-2.023-.686-3.019-1.034-5.472-1.915-11.059-3.49-16.531-5.406-3.667-1.284-7.308-2.638-10.974-3.924-3.115-1.092-6.323-2.956-9.629-3.275a3.309,3.309,0,0,0-2.33.432c-.9.681-1,1.974-1.023,3.1-.027,1.439,0,3.03.964,4.1a5.741,5.741,0,0,0,1.25.953c4.555,2.853,9.042,5.923,13.684,8.65,5.471,3.247,11.066,6.292,16.812,9.028,3.212,1.53,6.51,2.891,9.765,4.364,3.341,1.512,6.911,3.32,10.669,3.313a7.282,7.282,0,0,0,7.122-4.909,8.413,8.413,0,0,0-1.219-7.8,12.655,12.655,0,0,0-3.737-2.83A75.542,75.542,0,0,0,851.691,1852.852Z"
          transform="translate(-808.179 -1839.179)"
          fill="#f8a17a"
        />
      </g>
      <g
        id="Group_36314"
        data-name="Group 36314"
        transform="translate(130.627 182.851)"
      >
        <path
          id="Path_22677"
          data-name="Path 22677"
          d="M1187.822,1567.561c2.354-7.033,4.2-10.793,6.868-17.053,4.016-9.427,8.695-19.742,6.947-30.32-.837-5.064-5.174-9.284-10.563-8.346a11.873,11.873,0,0,0-7.832,5.3c-2.041,3.051-3.165,6.605-4.376,10.038a184.918,184.918,0,0,0-5.39,18.443c-1.494,6.234-2.3,12.67-4.334,18.76a21.459,21.459,0,0,0-1.169,4.285c3.223,2.566,10.417,7.895,13.819,15.084A146.726,146.726,0,0,0,1187.822,1567.561Z"
          transform="translate(-1167.972 -1511.71)"
          fill="#009e7f"
        />
      </g>
      <g
        id="Group_36315"
        data-name="Group 36315"
        transform="translate(148.061 191.093)"
        opacity="0.5"
        // style="mix-blend-mode: multiply;isolation: isolate"
      >
        <path
          id="Path_22678"
          data-name="Path 22678"
          d="M1303.471,1607.576c.262,6.152.7,12.363.957,18.514.754-2.334,1.92-5.565,2.542-7.308,1.24-3.473,3.158-7.38,4.05-10.959a99.485,99.485,0,0,0,2.191-13.312,23.031,23.031,0,0,0,.115-5.007,36.007,36.007,0,0,0-1.657-5.523q-.714-2.178-1.509-4.328c-.434-1.173-2.431-2.619-1.788-4.1a80.587,80.587,0,0,0-4.549,12.357c-1.024,4.086-.857,7.781-.681,11.921Q1303.306,1603.7,1303.471,1607.576Z"
          transform="translate(-1303.009 -1575.552)"
          fill="#009e7f"
        />
      </g>
      <g
        id="Group_36316"
        data-name="Group 36316"
        transform="translate(196.648 183.178)"
      >
        <path
          id="Path_22679"
          data-name="Path 22679"
          d="M1707.628,1537.078c2.795,5.955,5.392,12.007,7.65,18.187a122.346,122.346,0,0,1,4.409,12.928c.9,3.715,1.954,8.611-.5,11.949a8.5,8.5,0,0,1-9.836,2.543c-2.817-1.106-4.8-3.706-6.139-6.329-1.77-3.48-3.54-6.978-5.4-10.421-3.873-7.15-8.168-14.057-12.089-21.173-3.47-6.3-6.483-13.367-6.374-20.691.076-5.132,3.738-9.95,9.206-9.822a11.873,11.873,0,0,1,8.533,4.081c2.471,2.715,4.111,6.062,5.818,9.277Q1705.382,1532.278,1707.628,1537.078Z"
          transform="translate(-1679.342 -1514.246)"
          fill="#009e7f"
        />
      </g>
      <g
        id="Group_36317"
        data-name="Group 36317"
        transform="translate(203.185 191.668)"
        opacity="0.5"
        // style="mix-blend-mode: multiply;isolation: isolate"
      >
        <path
          id="Path_22680"
          data-name="Path 22680"
          d="M1741.561,1611.932c1.016,5.376,1.989,10.768,3.093,16.121q.064.31.13.619c-1.083-2.2-2.886-5.432-3.753-7.067-1.727-3.258-5.052-8.977-7.008-12.185a29.544,29.544,0,0,1-3.828-9.47c-.629-2.789.245-4.24.766-7.019a29.6,29.6,0,0,1,2.233-5.934c.4-.938.687-2.151,1.085-3.082a11.738,11.738,0,0,0,.638-3.914,33.643,33.643,0,0,1,1.294,5.537C1737.718,1594.394,1739.894,1603.111,1741.561,1611.932Z"
          transform="translate(-1729.976 -1580.001)"
          fill="#009e7f"
        />
      </g>
      <g
        id="Group_36318"
        data-name="Group 36318"
        transform="translate(170.727 158.65)"
      >
        <path
          id="Path_22681"
          data-name="Path 22681"
          d="M1478.569,1339.248a28.529,28.529,0,0,0,.32-6.286c-.064-2.644-.082-5.3-.21-7.935a28.071,28.071,0,0,1,7.518-.716c2.3.1,4.6-.145,6.9-.01a.811.811,0,0,1,.517.152.741.741,0,0,1,.171.5c.308,3.57.005,7.186.247,10.762a26.231,26.231,0,0,0,.386,3.059c-.361.316-.728.619-1.106.9a11.783,11.783,0,0,1-10.061,1.833A15.183,15.183,0,0,1,1478.569,1339.248Z"
          transform="translate(-1478.569 -1324.259)"
          fill="#e5785c"
        />
      </g>
      <g
        id="Group_36321"
        data-name="Group 36321"
        transform="translate(146.732 176.413)"
      >
        <path
          id="Path_22682"
          data-name="Path 22682"
          d="M1299.066,1516.284c.766,3.966.586,9.287.73,13.4a74.206,74.206,0,0,1-.37,12.159c6.309.885,12.191.741,18.561.667,2.7-.031,5.4-.064,8.093-.263,4.309-.319,8.573-1.065,12.861-1.6q6.082-.758,12.219-.948a236.421,236.421,0,0,1,1.315-30.564c1.2-9.987,3.477-20.239,3.441-30.308-.012-3.283.292-8.979-3.5-10.461-3.394-1.325-6.836-2.519-10.283-3.7a51.287,51.287,0,0,0-9.825-2.5,43.534,43.534,0,0,0-14.531.684,89.659,89.659,0,0,0-12.764,3.844c-1.535.568-3.624.944-4.851,2-1.418,1.223-2.214,3.707-2.925,5.38a56.668,56.668,0,0,0-4.332,17.721,31.665,31.665,0,0,0,.245,8.8c.979,4.593,3.493,8.633,5.157,12.978A16.038,16.038,0,0,1,1299.066,1516.284Z"
          transform="translate(-1292.713 -1461.841)"
          fill="#009e7f"
        />
        <g id="Group_36320" data-name="Group 36320" clipPath="url(#clip-path)">
          <g
            id="Group_36319"
            data-name="Group 36319"
            transform="translate(14.408 -16.004)"
          >
            <path
              id="Path_22683"
              data-name="Path 22683"
              d="M1416.035,1338.122a28.249,28.249,0,0,1,4.883-.225,20.29,20.29,0,0,1,12.38,4.292c2.8,2.293,5.757,5.674,5.8,10.636.029,3-1.278,5.657-2.517,8.385-4.218,9.289-10.83,16.564-18.713,15.737-10.047-1.055-16.263-15.4-12.4-28.891a15.8,15.8,0,0,1,3.431-6.593A12.075,12.075,0,0,1,1416.035,1338.122Z"
              transform="translate(-1404.315 -1337.879)"
              fill="#f8a17a"
            />
          </g>
        </g>
      </g>
      <g
        id="Group_36322"
        data-name="Group 36322"
        transform="translate(196.567 233.271)"
      >
        <path
          id="Path_22685"
          data-name="Path 22685"
          d="M1678.712,1902.248"
          transform="translate(-1678.712 -1902.248)"
          fill="#ff9243"
        />
      </g>
      <g
        id="Group_36333"
        data-name="Group 36333"
        transform="translate(59.322 218.642)"
      >
        <g id="Group_36323" data-name="Group 36323">
          <path
            id="Path_22686"
            data-name="Path 22686"
            d="M623.171,1795.188a22.7,22.7,0,0,0-4.609,2.374c-1,.654-2.232,1.59-2.074,2.943a.586.586,0,0,0,.435.528.791.791,0,0,0,.311-.029c1.911-.457,3.558-1.944,5.523-1.933a6.241,6.241,0,0,0-2,.873q-1.03.506-2.011,1.107a7.828,7.828,0,0,0-2.874,2.5,1.294,1.294,0,0,0-.159,1.022,1.314,1.314,0,0,0,1.292.794,3.856,3.856,0,0,0,1.542-.47l1.169-.546a5.483,5.483,0,0,0-2.054,1.727,1.367,1.367,0,0,0,.416,1.855c.582.278,1.14-.057,1.69-.225.851-.26,1.657-.715,2.527-.9-.527.13-.816.95-.891,1.488a1.754,1.754,0,0,0,.542,1.471,1.145,1.145,0,0,0,.565.322,1.6,1.6,0,0,0,.825-.14l5.247-1.884c2.705-.978,5.274-2.189,8.071-2.936a20.03,20.03,0,0,1,3.064-.692c1.7-.172,3.741-.9,5.436-.461,1.438.375,4.68,1.173,6.077.667,1.967-.712,1.609-.963,1.423-2.7-.236-2.206-4.3-3.423-6.133-4.374-1.206-.626-1.818-2.4-2.84-3.292a18,18,0,0,0-3.106-2.18,9.982,9.982,0,0,0-2.683-.924,18.109,18.109,0,0,0-2.41-.154,17.559,17.559,0,0,1-4.595-1.544c-1.071-.421-2.261-.922-3.275-.077a2.178,2.178,0,0,0-.743,1.971c.136.868.649.913,1.378,1.209.512.207,1.652.943,2.186.885A30.938,30.938,0,0,0,623.171,1795.188Z"
            transform="translate(-615.667 -1788.932)"
            fill="#f8a17a"
          />
        </g>
        <g
          id="Group_36326"
          data-name="Group 36326"
          transform="translate(6.397 8.392)"
        >
          <g id="Group_36325" data-name="Group 36325">
            <g id="Group_36324" data-name="Group 36324">
              <path
                id="Path_22687"
                data-name="Path 22687"
                d="M671.181,1853.936a12.538,12.538,0,0,0-1.559.217,14.67,14.67,0,0,0-3,.941q-.36.16-.714.333c-.232.123-.465.244-.69.379.244-.1.484-.2.729-.294s.485-.192.73-.282c.49-.179.981-.352,1.479-.505s1-.3,1.5-.429S670.669,1854.05,671.181,1853.936Z"
                transform="translate(-665.214 -1853.936)"
                fill="#e5785c"
              />
            </g>
          </g>
        </g>
        <g
          id="Group_36329"
          data-name="Group 36329"
          transform="translate(3.427 11.245)"
        >
          <g id="Group_36328" data-name="Group 36328">
            <g id="Group_36327" data-name="Group 36327">
              <path
                id="Path_22688"
                data-name="Path 22688"
                d="M651.317,1876.035a14.839,14.839,0,0,0-2.461.767,22.959,22.959,0,0,0-2.328,1.116q-1.125.633-2.2,1.34-.536.357-1.067.721c-.35.249-.7.494-1.048.75l2.194-1.347c.732-.446,1.464-.89,2.217-1.3s1.512-.8,2.293-1.148A21.73,21.73,0,0,1,651.317,1876.035Z"
                transform="translate(-642.209 -1876.035)"
                fill="#e5785c"
              />
            </g>
          </g>
        </g>
        <g
          id="Group_36332"
          data-name="Group 36332"
          transform="translate(6.36 14.645)"
        >
          <g id="Group_36331" data-name="Group 36331">
            <g id="Group_36330" data-name="Group 36330">
              <path
                id="Path_22689"
                data-name="Path 22689"
                d="M672.055,1902.363c-.164.024-.329.05-.493.079l-.489.106-.482.135-.476.155a13.621,13.621,0,0,0-1.831.808q-.884.468-1.718,1.02-.416.276-.826.559c-.27.2-.542.385-.807.586.289-.165.571-.339.858-.507l.853-.512c.572-.335,1.143-.67,1.729-.976a19.677,19.677,0,0,1,1.794-.84A14.205,14.205,0,0,1,672.055,1902.363Z"
                transform="translate(-664.933 -1902.363)"
                fill="#e5785c"
              />
            </g>
          </g>
        </g>
      </g>
      <g
        id="Group_36334"
        data-name="Group 36334"
        transform="translate(173.229 238.615)"
      >
        <path
          id="Path_22690"
          data-name="Path 22690"
          d="M1540.786,1945.5c-1.033.215-2.062.429-3.083.631-5.609,1.108-11.141,2.568-16.751,3.676-3.759.743-7.532,1.413-11.291,2.153-3.194.629-6.862.642-9.822,2.033a3.217,3.217,0,0,0-1.752,1.544c-.414,1.04.161,2.2.719,3.184.711,1.251,1.546,2.605,2.908,3.036a5.648,5.648,0,0,0,1.545.191c5.312.159,10.678.539,16,.545,6.289.037,12.579-.163,18.839-.7,3.5-.3,6.986-.793,10.493-1.165,3.6-.382,7.544-.626,10.721-2.524a7.185,7.185,0,0,0,3.521-7.807,8.516,8.516,0,0,0-5.017-6.094,12.474,12.474,0,0,0-4.608-.552A73.739,73.739,0,0,0,1540.786,1945.5Z"
          transform="translate(-1497.945 -1943.637)"
          fill="#f8a17a"
        />
      </g>
      <path
        id="Path_22691"
        data-name="Path 22691"
        d="M1325.477,1212.325c-4.95,5.093-.46,17.538,7.435,15.738,8.483-1.935,7.207-15.155-.464-17.326A6.706,6.706,0,0,0,1325.477,1212.325Z"
        transform="translate(-1172.711 -1066.446)"
        fill="#fff"
      />
      <path
        id="Path_22692"
        data-name="Path 22692"
        d="M1390.8,1073.542a34.2,34.2,0,0,0-1.5-10.224c-4.148-12.7-19.99-15.837-29.53-6.721-10.638,10.166-6.567,34.472,4.638,43.01a12.572,12.572,0,0,0,10.706,2.109C1386.125,1098.764,1390.871,1085.215,1390.8,1073.542Z"
        transform="translate(-1198.991 -927.945)"
        fill="#f8a17a"
      />
      <path
        id="Path_22693"
        data-name="Path 22693"
        d="M1601.486,1221.483c4.874-2.665,6.375,4.083,5.536,7.442a10.712,10.712,0,0,1-1.755,3.881c-1.159,1.537-4.476,4.087-6.386,2.405-.867-.763-.956-2.059-.983-3.214C1597.826,1228.9,1598.183,1223.29,1601.486,1221.483Z"
        transform="translate(-1411.758 -1075.572)"
        fill="#f8a17a"
      />
      <path
        id="Path_22694"
        data-name="Path 22694"
        d="M1399.385,1063.11c-4.367-13.37-21.046-16.673-31.09-7.076a19.785,19.785,0,0,0-4.886,7.874,9.322,9.322,0,0,0,.775,1.042,14.924,14.924,0,0,0,5.194,3.524,74.666,74.666,0,0,0,17.672,5.236c.446.083.894.166,1.342.254a14.975,14.975,0,0,1,4.777,1.6c4.115,2.425,2.345,7.76,5.359,10.1a2.877,2.877,0,0,0,.824.445,45,45,0,0,0,1.611-12.229A35.993,35.993,0,0,0,1399.385,1063.11Z"
        transform="translate(-1207.55 -927.214)"
        fill="#e5785c"
      />
      <path
        id="Path_22695"
        data-name="Path 22695"
        d="M1400.575,1043.087a14.979,14.979,0,0,1,4.46,2.339c3.675,3.051,1.078,8.034,3.68,10.823,2.307,2.471,5.809-.794,6.726-3.076,1.69-4.2,1.591-8.882,1.466-13.412a28.146,28.146,0,0,0-.885-7.5,18.462,18.462,0,0,0-4.255-7.008,27.292,27.292,0,0,0-21.477-8.373c-6.181.389-17.023,5.583-12.177,13.452a14.917,14.917,0,0,0,4.565,4.307,74.672,74.672,0,0,0,16.61,7.988C1399.717,1042.775,1400.147,1042.928,1400.575,1043.087Z"
        transform="translate(-1219.301 -897.864)"
        fill="#755846"
      />
      <g
        id="Group_36335"
        data-name="Group 36335"
        transform="translate(159.844 113.216)"
      >
        <path
          id="Path_22696"
          data-name="Path 22696"
          d="M1430.261,1004.024l-3.419-.212c1-9.5-1.768-21.928-9.885-26.439-3.041-1.69-16.5-4.437-21.537.893-.689.773-1.15,1.422-1.15,1.422,2.8-9.389,18.036-8.206,25.04-5.05C1429.94,979.427,1431.267,993.93,1430.261,1004.024Z"
          transform="translate(-1394.27 -972.341)"
          fill="#b8d1ce"
        />
      </g>
      <path
        id="Path_22697"
        data-name="Path 22697"
        d="M1597.631,1209.337c-6.88,1.765-9.538,14.725-1.863,17.3,8.247,2.773,14.052-9.173,8.639-15.025A6.707,6.707,0,0,0,1597.631,1209.337Z"
        transform="translate(-1405.855 -1065.346)"
        fill="#fff"
      />
      <path
        id="Path_22698"
        data-name="Path 22698"
        d="M1623.281,1223.281c-4.749.763-7.675,10.853-2.78,13.63,5.259,2.984,10.194-6,7.1-11.177C1626.4,1223.716,1624.81,1223.035,1623.281,1223.281Z"
        transform="translate(-1429.251 -1077.626)"
        fill="#b8d1ce"
      />
      <g
        id="Group_36336"
        data-name="Group 36336"
        transform="translate(46.34 197.649)"
      >
        <rect
          id="Rectangle_3657"
          data-name="Rectangle 3657"
          width="38.469"
          height="7.532"
          transform="translate(76.115 50.943)"
          fill="#324751"
        />
        <path
          id="Path_22699"
          data-name="Path 22699"
          d="M601.272,1678l-9.709-49.427a2.783,2.783,0,0,0-2.731-2.247H524.292a2.761,2.761,0,0,0-2.237,1.147l-.008-.008-2.98,3.524,2.644-.58,9.559,48.664a2.784,2.784,0,0,0,2.732,2.248h64.541A2.784,2.784,0,0,0,601.272,1678Z"
          transform="translate(-518.556 -1626.331)"
          fill="#324751"
        />
        <path
          id="Path_22700"
          data-name="Path 22700"
          d="M527.609,1708.285H592.15a2.784,2.784,0,0,0,2.732-3.32l-9.709-49.427a2.784,2.784,0,0,0-2.732-2.247H517.9a2.784,2.784,0,0,0-2.732,3.32l9.709,49.427A2.784,2.784,0,0,0,527.609,1708.285Z"
          transform="translate(-515.116 -1649.81)"
          fill="#727f87"
        />
        <path
          id="Path_22701"
          data-name="Path 22701"
          d="M768.47,1816.066a7.536,7.536,0,0,0,7.115,6.037,4.839,4.839,0,0,0,4.873-6.037,7.621,7.621,0,0,0-7.115-6.037A4.881,4.881,0,0,0,768.47,1816.066Z"
          transform="translate(-735.675 -1786.313)"
          fill="#324751"
        />
        <path
          id="Path_22702"
          data-name="Path 22702"
          d="M515.116,1671.1"
          transform="translate(-515.116 -1665.321)"
          fill="#3f91ac"
        />
      </g>
      <path
        id="Path_22703"
        data-name="Path 22703"
        d="M1363.2,2006.093c-1.884.389-3.357,2.044-5.232,2.6a6.434,6.434,0,0,1-4.056-.3c-1.182-.444-2.385-.681-3.6-1.069-.946-.3-2.223-.941-3.239-.729-2.663.554-5.319,2.45-7.734,3.68a2.81,2.81,0,0,1-1.736.448c-.6-.114-1.1-.839-.757-1.344-.694.649-1.614,1.946-2.734,1.443a.936.936,0,0,1-.481-1.247,3.784,3.784,0,0,1-1.321,1.069,1.3,1.3,0,0,1-1.542-.359,1.533,1.533,0,0,1-.205-.771,5.821,5.821,0,0,1,.619-2.679c1.9-4.15,6.2-7.228,9.86-9.7a7.9,7.9,0,0,1,2.054-1.109,7.2,7.2,0,0,1,2.077-.23,41.39,41.39,0,0,1,13.377,2.162,5.789,5.789,0,0,0,2.882-.127,4.489,4.489,0,0,1,2.075-.06,3.578,3.578,0,0,1,1.789,1.448,6.72,6.72,0,0,1,1.383,4.176c-.076,1.113-.161,2.313-1.47,2.547-.531.095-1.077.036-1.613.092C1363.466,2006.045,1363.335,2006.066,1363.2,2006.093Z"
        transform="translate(-1178.944 -1750.446)"
        fill="#f8a17a"
      />
      <g
        id="Group_36341"
        data-name="Group 36341"
        transform="translate(264.5 191.182)"
      >
        <g
          id="Group_36338"
          data-name="Group 36338"
          transform="translate(4.465)"
        >
          <g id="Group_36337" data-name="Group 36337">
            <path
              id="Path_22704"
              data-name="Path 22704"
              d="M2243.941,1611.669a5.842,5.842,0,0,0,.135-4.418,17.114,17.114,0,0,0-2.034-4.017,18.233,18.233,0,0,1-2.228-4.527,9.739,9.739,0,0,1,.109-5.42c1.06-3.416,3.231-5.933,4.727-8.508a12.227,12.227,0,0,0,1.605-4.091,7.043,7.043,0,0,0-.534-4.452,6.428,6.428,0,0,1,1.915,4.53,11.532,11.532,0,0,1-1.013,4.983c-1.3,3.1-3.245,5.62-4,8.342a7.316,7.316,0,0,0-.23,3.96,21.612,21.612,0,0,0,1.586,4.159,14.441,14.441,0,0,1,1.451,4.789A5.61,5.61,0,0,1,2243.941,1611.669Z"
              transform="translate(-2239.479 -1576.236)"
              fill="#fff"
            />
          </g>
        </g>
        <g
          id="Group_36340"
          data-name="Group 36340"
          transform="translate(0 37.311)"
        >
          <g id="Group_36339" data-name="Group 36339">
            <path
              id="Rectangle_3658"
              data-name="Rectangle 3658"
              d="M0,0H19.18a0,0,0,0,1,0,0V17.883a9.59,9.59,0,0,1-9.59,9.59h0A9.59,9.59,0,0,1,0,17.883V0A0,0,0,0,1,0,0Z"
              fill="#f8a17a"
            />
            <path
              id="Path_22705"
              data-name="Path 22705"
              d="M2307.656,1913.362a8.451,8.451,0,1,0,8.329,8.45A8.39,8.39,0,0,0,2307.656,1913.362Zm0,13.886a5.437,5.437,0,1,1,5.358-5.437A5.4,5.4,0,0,1,2307.656,1927.249Z"
              transform="translate(-2287.137 -1907.148)"
              fill="#e5785c"
            />
            <path
              id="Path_22706"
              data-name="Path 22706"
              d="M2220.116,1893.078h0a1.04,1.04,0,0,1-1.038-1.037v-13.37a1.041,1.041,0,0,1,1.038-1.037h0a1.04,1.04,0,0,1,1.036,1.037v13.37A1.04,1.04,0,0,1,2220.116,1893.078Z"
              transform="translate(-2217.247 -1876.033)"
              fill="#fff"
              opacity="0.2"
            />
            <path
              id="Path_22707"
              data-name="Path 22707"
              d="M2286.383,1865.232v22.616a4.858,4.858,0,0,1-4.857,4.857h4.429a4.858,4.858,0,0,0,4.857-4.857v-22.616Z"
              transform="translate(-2271.633 -1865.232)"
              fill="#e5785c"
            />
          </g>
        </g>
      </g>
      <g
        id="Group_36342"
        data-name="Group 36342"
        transform="translate(222.76 76.214)"
      >
        <rect
          id="Rectangle_3659"
          data-name="Rectangle 3659"
          width="78.582"
          height="47.717"
          rx="6"
          transform="translate(78.582 47.717) rotate(180)"
          fill="#e5785c"
        />
        <path
          id="Path_22708"
          data-name="Path 22708"
          d="M1961.708,1004.71V982.782l17.173,9.367Z"
          transform="translate(-1951.365 -944.433)"
          fill="#e5785c"
        />
        <rect
          id="Rectangle_3660"
          data-name="Rectangle 3660"
          width="38.9"
          height="4.163"
          rx="2.082"
          transform="translate(11.969 21.844)"
          fill="#fff"
        />
        <rect
          id="Rectangle_3661"
          data-name="Rectangle 3661"
          width="12.75"
          height="4.163"
          rx="2.082"
          transform="translate(53.862 21.844)"
          fill="#fff"
        />
        <rect
          id="Rectangle_3662"
          data-name="Rectangle 3662"
          width="38.9"
          height="4.163"
          rx="2.082"
          transform="translate(66.612 16.553) rotate(180)"
          fill="#fff"
        />
        <rect
          id="Rectangle_3663"
          data-name="Rectangle 3663"
          width="12.75"
          height="4.163"
          rx="2.082"
          transform="translate(24.719 16.553) rotate(180)"
          fill="#fff"
        />
        <rect
          id="Rectangle_3664"
          data-name="Rectangle 3664"
          width="27.321"
          height="4.163"
          rx="2.082"
          transform="translate(11.969 30.487)"
          fill="#fff"
        />
      </g>
      <path
        id="Path_22709"
        data-name="Path 22709"
        d="M738.942,2084.378H462.225a4.989,4.989,0,0,1-5.1-4.866h0a4.989,4.989,0,0,1,5.1-4.865H738.942a4.989,4.989,0,0,1,5.1,4.865h0A4.989,4.989,0,0,1,738.942,2084.378Z"
        transform="translate(-418.268 -1819.118)"
        fill="#76c4b5"
      />
      <g
        id="Group_36343"
        data-name="Group 36343"
        transform="translate(26.438 33.594)"
      >
        <circle
          id="Ellipse_132"
          data-name="Ellipse 132"
          cx="29.582"
          cy="29.582"
          r="29.582"
          transform="translate(8.45 8.45)"
          fill="none"
          stroke="#c3e5df"
          strokeMiterlimit="10"
          strokeWidth="5"
        />
        <circle
          id="Ellipse_133"
          data-name="Ellipse 133"
          cx="26.893"
          cy="26.893"
          r="26.893"
          transform="translate(0 38.033) rotate(-45)"
          fill="#61bcab"
        />
        <rect
          id="Rectangle_3665"
          data-name="Rectangle 3665"
          width="2.592"
          height="4.067"
          transform="translate(39.328 15.206) rotate(180)"
          fill="#fff"
        />
        <rect
          id="Rectangle_3666"
          data-name="Rectangle 3666"
          width="2.592"
          height="16.344"
          transform="translate(39.328 38.033) rotate(180)"
          fill="#fff"
        />
        <rect
          id="Rectangle_3667"
          data-name="Rectangle 3667"
          width="2.592"
          height="4.067"
          transform="translate(60.859 39.328) rotate(-90)"
          fill="#fff"
        />
        <rect
          id="Rectangle_3668"
          data-name="Rectangle 3668"
          width="2.592"
          height="4.067"
          transform="translate(36.737 60.859)"
          fill="#fff"
        />
        <rect
          id="Rectangle_3669"
          data-name="Rectangle 3669"
          width="2.592"
          height="4.067"
          transform="translate(15.206 36.737) rotate(90)"
          fill="#fff"
        />
        <rect
          id="Rectangle_3670"
          data-name="Rectangle 3670"
          width="2.592"
          height="12.795"
          transform="matrix(-0.6, 0.8, -0.8, -0.6, 39.847, 37.774)"
          fill="#fff"
        />
        <circle
          id="Ellipse_134"
          data-name="Ellipse 134"
          cx="2.651"
          cy="2.651"
          r="2.651"
          transform="translate(35.016 35.805) rotate(-8.559)"
          fill="#fff"
        />
      </g>
    </g>
  </svg>
);
export default Contact;
