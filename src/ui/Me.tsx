import { Dispatch, SetStateAction, useState } from "react";
import { CirclePicker } from "react-color";

type OwnProps = {
    wellbeing: number;
    showPicker: boolean;
    setShowPicker: Dispatch<SetStateAction<boolean>>;
};

const Me = ({ wellbeing, showPicker, setShowPicker }: OwnProps) => {
    const [overalls, setOveralls] = useState("#ffaa00");

    const face =
        wellbeing > 80 ? "happy" : wellbeing > 30 ? "discontent" : "agony";
    333;
    return (
        <div
            className="flex flex-row-reverse sm:flex-row sm:space-x-2"
            onClick={() => setShowPicker(!showPicker)}
        >
            <div
                className={`${
                    showPicker ? "" : "hidden"
                } max-h-96 w-32 sm:w-full bg-black bg-opacity-40 p-2 sm:rounded-md flex items-center overflow-y-auto overflow-x-hidden`}
            >
                <CirclePicker
                    onChange={color => setOveralls(color.hex)}
                    colors={[
                        "#f44336",
                        "#e91e63",
                        "#7c002a",
                        "#9c27b0",
                        "#673ab7",
                        "#3f51b5",
                        "#2196f3",
                        "#03a9f4",
                        "#00bcd4",
                        "#009688",
                        "#4caf50",
                        "#8bc34a",
                        "#cddc39",
                        "#ffeb3b",
                        "#ffc107",
                        "#ff9800",
                        "#ff5722",
                        "#795548",
                        "#607d8b",
                        "#222222",
                        "#ffffff",
                    ]}
                />
            </div>
            <div className={`hidden ${!showPicker && "sm:flex"} self-end bg-black bg-opacity-40 p-2 sm:rounded-md hover:bg-opacity-20`}>🎨</div>
            <div className="bg-black bg-opacity-40 p-2 sm:rounded-md flex items-center shrink-0 sm:hover:bg-opacity-20">
                <div className="sm:hidden absolute self-start -translate-x-1 -translate-y-1.5 text-neutral-700">🎨</div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="211.563"
                    height="531.005"
                    version="1.1"
                    viewBox="0 0 55.976 140.495"
                    className="h-80 sm:h-48 w-full object-scale-down"
                >
                    <g transform="translate(-70.908 -22.754)">
                        <path
                            fill={overalls}
                            strokeWidth="0.389"
                            d="M98.896 52.274c-15.457 0-27.988 12.53-27.988 27.988V106.5h10.307v50.577h35.645V106.5h10.024V80.262c0-15.457-12.53-27.988-27.988-27.988z"
                            vectorEffect="none"
                        ></path>
                        <path
                            style={{ fontVariationSettings: "normal" }}
                            fill="#3b3b3b"
                            fillOpacity="1"
                            strokeDasharray="none"
                            strokeDashoffset="0"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.569"
                            d="M83.861 157.648a5.602 5.602 0 005.602 5.601 5.602 5.602 0 005.601-5.601z"
                            vectorEffect="none"
                        ></path>
                        <path
                            style={{ fontVariationSettings: "normal" }}
                            fill="#3b3b3b"
                            fillOpacity="1"
                            strokeDasharray="none"
                            strokeDashoffset="0"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.569"
                            d="M102.481 157.648a5.602 5.602 0 005.602 5.601 5.602 5.602 0 005.602-5.601z"
                            vectorEffect="none"
                        ></path>
                        <g transform="translate(-831.355 -172.231) scale(.35465)">
                            <circle
                                cx="2647.853"
                                cy="812.957"
                                r="13.763"
                                fill="#000"
                                fillOpacity="1"
                                stroke="#ff0"
                                strokeDasharray="none"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="1.95"
                                opacity="1"
                            ></circle>
                            <circle
                                cx="2647.853"
                                cy="812.957"
                                r="7.662"
                                fill="#000"
                                fillOpacity="1"
                                stroke="#ff0"
                                strokeDasharray="none"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="1.95"
                                opacity="1"
                            ></circle>
                            <path
                                fill="none"
                                stroke="#ff0"
                                strokeDasharray="none"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="2"
                                d="M2647.853 808.537v3.835"
                            ></path>
                            <path
                                fill="none"
                                stroke="#ff0"
                                strokeDasharray="none"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="2"
                                d="M2645.207 808.537v3.835"
                            ></path>
                            <path
                                fill="none"
                                stroke="#ff0"
                                strokeDasharray="none"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="2"
                                d="M2650.5 808.537v3.835"
                            ></path>
                            <path
                                fill="none"
                                stroke="#ff0"
                                strokeDasharray="none"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="2"
                                d="M2647.853 813.002v3.835"
                            ></path>
                            <path
                                fill="none"
                                stroke="#ff0"
                                strokeDasharray="none"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="2"
                                d="M2645.207 814.59v2.247"
                            ></path>
                            <path
                                fill="none"
                                stroke="#ff0"
                                strokeDasharray="none"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="2"
                                d="M2650.5 814.06v3.306"
                            ></path>
                            <path
                                style={{}}
                                fill="#ff0"
                                d="M2647.854 801.326c-.31 0-.617.013-.92.035l.148 1.967a10.352 10.352 0 011.543 0l.146-1.967c-.303-.023-.609-.035-.918-.035zm-2.739.31c-.605.14-1.192.327-1.758.553l.733 1.83c.472-.189.963-.344 1.469-.46zm5.477.003l-.444 1.92c.506.116.995.271 1.467.46l.735-1.83a11.986 11.986 0 00-1.758-.55zm-8.887 1.365c-.531.315-1.035.668-1.508 1.059l1.256 1.521a9.947 9.947 0 011.258-.885zm12.297 0l-1.006 1.695c.443.263.864.56 1.258.885l1.256-1.521c-.473-.39-.977-.744-1.508-1.059zm-15.13 2.34c-.409.46-.78.954-1.11 1.474l1.662 1.059c.275-.432.584-.843.924-1.227zm17.964 0l-1.477 1.306c.34.384.647.795.922 1.227l1.664-1.059a11.694 11.694 0 00-1.11-1.474zm-19.94 3.11c-.241.562-.438 1.149-.587 1.753l1.912.475c.123-.5.288-.985.488-1.451zm21.913 0l-1.811.777c.2.466.363.951.486 1.45l1.914-.474c-.15-.604-.348-1.19-.59-1.754zm-22.8 3.577a11.415 11.415 0 000 1.848l1.968-.154a9.812 9.812 0 01-.002-1.532zm23.688.004l-1.967.155a9.812 9.812 0 010 1.535l1.967.154c.024-.303.035-.61.035-.922 0-.312-.01-.619-.035-.922zm-21.476 3.198l-1.912.474c.15.605.346 1.19.587 1.754l1.813-.777a9.42 9.42 0 01-.488-1.451zm19.263 0c-.123.5-.286.985-.486 1.45l1.81.778c.242-.563.44-1.15.59-1.754zm-18.06 2.804l-1.662 1.059c.33.52.701 1.014 1.11 1.474l1.476-1.306a9.723 9.723 0 01-.924-1.227zm16.857 0a9.717 9.717 0 01-.922 1.227l1.475 1.306c.408-.46.78-.954 1.111-1.474zm-14.828 2.293l-1.256 1.522c.473.39.977.743 1.508 1.058l1.006-1.695a9.946 9.946 0 01-1.258-.885zm12.8 0a9.937 9.937 0 01-1.257.885l1.006 1.695a11.882 11.882 0 001.506-1.058zm-10.163 1.565l-.733 1.83c.566.226 1.153.413 1.758.552l.444-1.921a10.013 10.013 0 01-1.47-.461zm7.525 0c-.472.189-.961.344-1.467.46l.444 1.922a11.99 11.99 0 001.758-.552zm-4.533.691l-.148 1.967a12.337 12.337 0 001.838 0l-.147-1.967a10.31 10.31 0 01-1.543 0z"
                                color="#000"
                            ></path>
                        </g>
                        <g
                            fillOpacity="1"
                            stroke="#00f"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="1.5"
                            transform="translate(-1109.536 -282.494) scale(.49653)"
                        >
                            <circle
                                cx="2412.827"
                                cy="871.886"
                                r="7.594"
                                fill="#000"
                                opacity="1"
                            ></circle>
                            <circle
                                cx="2412.827"
                                cy="871.886"
                                r="3.199"
                                fill="none"
                                opacity="1"
                            ></circle>
                        </g>
                        <g
                            fill="#f59"
                            fillOpacity="1"
                            stroke="#7fff2a"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="1.5"
                            transform="translate(-1110.641 -298.608) scale(.49653)"
                        >
                            <circle
                                cx="2412.827"
                                cy="871.886"
                                r="7.594"
                                opacity="1"
                            ></circle>
                            <circle
                                cx="2412.827"
                                cy="871.886"
                                r="3.199"
                                opacity="1"
                            ></circle>
                        </g>
                        <g
                            fill="#fff"
                            stroke="#00f"
                            strokeDasharray="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="4"
                            strokeWidth="1.5"
                            transform="scale(.49655) rotate(-15 -1068.66 8872.438)"
                        >
                            <path d="M2367.538 842.285h14.49v9.348h-14.49z"></path>
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                fillOpacity="1"
                                strokeDashoffset="0"
                                strokeOpacity="1"
                                d="M2370.796 845.247v3.424"
                                opacity="1"
                                stopColor="#000"
                                stopOpacity="1"
                            ></path>
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                fillOpacity="1"
                                strokeDashoffset="0"
                                strokeOpacity="1"
                                d="M2376.088 845.247v3.424"
                                opacity="1"
                                stopColor="#000"
                                stopOpacity="1"
                            ></path>
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                fillOpacity="1"
                                strokeDashoffset="0"
                                strokeOpacity="1"
                                d="M2373.442 845.247v3.424"
                                opacity="1"
                                stopColor="#000"
                                stopOpacity="1"
                            ></path>
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                fillOpacity="1"
                                strokeDashoffset="0"
                                strokeOpacity="1"
                                d="M2378.733 845.247v3.424"
                                opacity="1"
                                stopColor="#000"
                                stopOpacity="1"
                            ></path>
                        </g>
                        <g
                            fill="#ff6e6e"
                            fillOpacity="1"
                            stroke="#ffdd06"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="1.5"
                            transform="rotate(15 1815.52 -3862.694) scale(.49649)"
                        >
                            <circle
                                cx="2384.316"
                                cy="871.886"
                                r="7.594"
                            ></circle>
                            <path
                                strokeLinejoin="round"
                                d="M2379.832 871.15c0 2.553.866 3.995 3.154 3.995h2.965a1.49 1.49 0 001.492-1.487 1.49 1.49 0 00-1.493-1.486h-3.503c-1.44 0-2.615-1.021-2.615-1.021z"
                            ></path>
                            <ellipse
                                style={{ fontVariationSettings: "normal" }}
                                cx="2384.792"
                                cy="870.23"
                                strokeDashoffset="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity="1"
                                rx="1.948"
                                ry="1.942"
                                stopColor="#000"
                                stopOpacity="1"
                                vectorEffect="none"
                            ></ellipse>
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                strokeDashoffset="0"
                                strokeLinecap="round"
                                strokeLinejoin="miter"
                                d="M2386.74 870.23h1.315"
                                opacity="1"
                                stopColor="#000"
                                stopOpacity="1"
                                vectorEffect="none"
                            ></path>
                        </g>
                        <g transform="rotate(15 1646.927 -4013.807) scale(.49649)">
                            <circle
                                cx="2460.787"
                                cy="809.26"
                                r="7.594"
                                fill="#fff"
                                fillOpacity="1"
                                stroke="#000"
                                strokeDasharray="none"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="1.5"
                                opacity="1"
                            ></circle>
                            <path
                                fill="#fff"
                                stroke="#000"
                                strokeLinejoin="bevel"
                                strokeWidth="1.658"
                                d="M2460.787 804.274h0c1.028 0 1.747.857 1.855 1.91l.506 4.976c.136 1.34-1.053 2.431-2.36 2.431h0c-1.308 0-2.497-1.091-2.361-2.431l.506-4.977c.108-1.052.827-1.91 1.854-1.91z"
                                opacity="1"
                                stopColor="#000"
                                stopOpacity="1"
                            ></path>
                            <path
                                fill="none"
                                stroke="#f60"
                                strokeDasharray="none"
                                strokeLinecap="round"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="1.801"
                                d="M2459.784 807.223h2.006"
                            ></path>
                            <path
                                fill="none"
                                stroke="#f60"
                                strokeDasharray="none"
                                strokeLinecap="round"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="2"
                                d="M2458.054 812.767h1.528"
                            ></path>
                            <path
                                fill="none"
                                stroke="#f60"
                                strokeDasharray="none"
                                strokeLinecap="round"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="2"
                                d="M2461.992 812.767h1.53"
                            ></path>
                        </g>
                        <g
                            fillOpacity="1"
                            stroke="#ff0"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="1.5"
                            transform="translate(-1085.999 -297.473) scale(.49653)"
                        >
                            <circle
                                cx="2412.827"
                                cy="871.886"
                                r="7.594"
                                fill="#000"
                                opacity="1"
                            ></circle>
                            <circle
                                cx="2412.827"
                                cy="871.886"
                                r="3.199"
                                fill="none"
                                opacity="1"
                            ></circle>
                        </g>
                        <g
                            fillOpacity="1"
                            stroke="#0f0"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="1.5"
                            transform="translate(-1091.276 -283.568) scale(.49653)"
                        >
                            <circle
                                cx="2412.827"
                                cy="871.886"
                                r="7.594"
                                fill="#000"
                                opacity="1"
                            ></circle>
                            <circle
                                cx="2412.827"
                                cy="871.886"
                                r="3.199"
                                fill="none"
                                opacity="1"
                            ></circle>
                        </g>
                        <g
                            fillOpacity="1"
                            stroke="red"
                            strokeDasharray="none"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="1.5"
                            transform="translate(-1092.103 -305.76) scale(.49653)"
                        >
                            <circle
                                cx="2412.827"
                                cy="871.886"
                                r="7.594"
                                fill="#000"
                                opacity="1"
                            ></circle>
                            <circle
                                cx="2412.827"
                                cy="871.886"
                                r="3.199"
                                fill="none"
                                opacity="1"
                            ></circle>
                        </g>
                        <path
                            style={{ fontVariationSettings: "normal" }}
                            fill="#919191"
                            fillOpacity="1"
                            strokeDasharray="none"
                            strokeDashoffset="0"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.203"
                            d="M97.916 59.482H99.87599999999999V96.77H97.916z"
                            stopColor="#000"
                            vectorEffect="none"
                        ></path>
                        <path
                            fill="red"
                            fillOpacity="1"
                            stroke="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M70.908 80.262H74.673V102.52799999999999H70.908z"
                        ></path>
                        <path
                            fill="#62ba28"
                            fillOpacity="1"
                            stroke="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.8"
                            d="M122.109 80.832H126.884V101.969H122.109z"
                        ></path>
                        <g fill="#000">
                            <path
                                fillOpacity="0.071"
                                strokeWidth="0.389"
                                d="M98.896 52.844a27.988 27.988 0 00-4.887.483 27.988 27.988 0 0122.85 27.505h10.025a27.988 27.988 0 00-27.988-27.988z"
                            ></path>
                            <path
                                fillOpacity="0.089"
                                strokeWidth="0.25"
                                d="M98.896 62.87c-9.92-.001-17.963 8.041-17.963 17.962h35.927c0-9.92-8.043-17.963-17.964-17.963z"
                            ></path>
                            <path
                                fillOpacity="0.053"
                                strokeWidth="0.25"
                                d="M98.896 62.869a17.964 17.964 0 00-3.136.31 17.964 17.964 0 0114.666 17.653h6.434A17.964 17.964 0 0098.896 62.87z"
                            ></path>
                            <path
                                fillOpacity="0.089"
                                strokeWidth="0.261"
                                d="M80.933 80.832H116.85900000000001V107.07H80.933z"
                            ></path>
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                fillOpacity="0.053"
                                strokeDasharray="none"
                                strokeDashoffset="0"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="0.528"
                                d="M110.426 80.832H116.86V157.647H110.426z"
                                stopColor="#000"
                                vectorEffect="none"
                            ></path>
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                fillOpacity="0.071"
                                strokeDasharray="none"
                                strokeDashoffset="0"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="0.48"
                                d="M116.86 80.832H126.885V107.07H116.86z"
                                stopColor="#000"
                                vectorEffect="none"
                            ></path>
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                fillOpacity="0.18"
                                strokeDasharray="none"
                                strokeDashoffset="0"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="0.236"
                                d="M97.916 107.071H99.87599999999999V157.648H97.916z"
                                stopColor="#000"
                                vectorEffect="none"
                            ></path>
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                fillOpacity="0.053"
                                strokeDasharray="none"
                                strokeDashoffset="0"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="0.428"
                                d="M91.483 107.071H97.917V157.648H91.483z"
                                stopColor="#000"
                                vectorEffect="none"
                            ></path>
                        </g>
                        <path
                            style={{ fontVariationSettings: "normal" }}
                            fill="#787878"
                            fillOpacity="1"
                            strokeDasharray="none"
                            strokeDashoffset="0"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.099"
                            d="M76.358 -93.683H78.318V-84.778H76.358z"
                            stopColor="#000"
                            transform="rotate(90)"
                            vectorEffect="none"
                        ></path>
                        <path
                            style={{ fontVariationSettings: "normal" }}
                            fill="#787878"
                            fillOpacity="1"
                            strokeDasharray="none"
                            strokeDashoffset="0"
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="0.099"
                            d="M76.358 -113.015H78.318V-104.11H76.358z"
                            stopColor="#000"
                            transform="rotate(90)"
                            vectorEffect="none"
                        ></path>
                        <g fill="#ccb695" fillOpacity="1">
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                strokeDasharray="none"
                                strokeDashoffset="0"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="0.389"
                                d="M72.366 107.07a3.834 3.834 0 003.834 3.834 3.834 3.834 0 003.834-3.833z"
                                vectorEffect="none"
                            ></path>
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                strokeDasharray="none"
                                strokeDashoffset="0"
                                strokeLinecap="butt"
                                strokeLinejoin="miter"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="0.389"
                                d="M117.759 107.07a3.834 3.834 0 003.834 3.834 3.834 3.834 0 003.833-3.833z"
                                vectorEffect="none"
                            ></path>
                            <circle
                                cx="98.896"
                                cy="41.768"
                                r="19.014"
                                strokeWidth="0.265"
                            ></circle>
                        </g>
                        <path
                            fill="#62492c"
                            fillOpacity="1"
                            strokeWidth="0.265"
                            d="M98.896 22.754A19.014 19.014 0 0081.1 35.215h35.642a19.014 19.014 0 00-17.845-12.46z"
                        ></path>
                        <path
                            fill="#000"
                            fillOpacity="0.265"
                            strokeWidth="0.265"
                            d="M98.896 22.754a19.014 19.014 0 00-3.32.328A19.014 19.014 0 01111.1 41.768a19.014 19.014 0 01-15.61 18.668 19.014 19.014 0 003.406.346 19.014 19.014 0 0019.014-19.014 19.014 19.014 0 00-19.014-19.014z"
                        ></path>
                        <g
                            fillOpacity="1"
                            className={face === "agony" ? "visible" : "hidden"}
                            stroke="#333"
                            strokeDasharray="none"
                            strokeDashoffset="0"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeMiterlimit="4"
                            strokeOpacity="1"
                            strokeWidth="2.365"
                        >
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                fill="none"
                                d="M89.39 49.316l4.082-1.693.952 3.552 4.515-4.514 1.269 4.734 4.097-4.097 4.098 2.018"
                            ></path>
                            <g transform="matrix(1 0 0 -1 -166.016 400.811)">
                                <path
                                    style={{ fontVariationSettings: "normal" }}
                                    fill="#4ec0ff"
                                    d="M274.94 358.472l-4.264 1.142"
                                ></path>
                                <path
                                    style={{ fontVariationSettings: "normal" }}
                                    fill="#ad2323"
                                    d="M254.885 358.472l4.264 1.142"
                                ></path>
                            </g>
                        </g>
                        <g
                            fillOpacity="1"
                            className={face === "happy" ? "visible" : "hidden"}
                        >
                            <g transform="translate(-42.118 8.793)">
                                <rect
                                    width="2.863"
                                    height="6.537"
                                    x="132.584"
                                    y="29.707"
                                    fill="#333"
                                    strokeWidth="0.265"
                                    ry="1.431"
                                ></rect>
                                <path
                                    style={{ fontVariationSettings: "normal" }}
                                    fill="#4ec0ff"
                                    stroke="#333"
                                    strokeDasharray="none"
                                    strokeDashoffset="0"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="4"
                                    strokeOpacity="1"
                                    strokeWidth="2.365"
                                    d="M148.262 35.182v-4.414"
                                ></path>
                            </g>
                            <path
                                fill="none"
                                stroke="#333"
                                strokeDasharray="none"
                                strokeLinecap="round"
                                strokeOpacity="1"
                                strokeWidth="2.365"
                                d="M108.403 49.939a19.014 19.014 0 01-19.014 0"
                            ></path>
                        </g>
                        <g
                            fillOpacity="1"
                            className={
                                face === "discontent" ? "visible" : "hidden"
                            }
                        >
                            <path
                                style={{ fontVariationSettings: "normal" }}
                                fill="none"
                                stroke="#333"
                                strokeDasharray="none"
                                strokeDashoffset="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeMiterlimit="4"
                                strokeOpacity="1"
                                strokeWidth="2.365"
                                d="M89.204 49.939h19.014"
                            ></path>
                            <g transform="translate(-126.415 8.792)">
                                <rect
                                    width="2.863"
                                    height="6.537"
                                    x="-34.407"
                                    y="214.859"
                                    fill="#333"
                                    strokeWidth="0.265"
                                    ry="1.431"
                                    transform="rotate(-90)"
                                ></rect>
                                <path
                                    style={{ fontVariationSettings: "normal" }}
                                    fill="#4ec0ff"
                                    stroke="#333"
                                    strokeDasharray="none"
                                    strokeDashoffset="0"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="4"
                                    strokeOpacity="1"
                                    strokeWidth="2.365"
                                    d="M234.58 32.975h-4.413"
                                ></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Me;
