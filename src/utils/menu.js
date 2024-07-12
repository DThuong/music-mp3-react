import icons from "../utils/icons";
const { MdLibraryMusic, FaChartLine, BsJournalText, FaCircleDot } = icons
export const SidebarMenu = [
    {
        path: "my-music",
        text: "Cá nhân",
        icons: <MdLibraryMusic size={24}/>
    },
    {
        path: "",
        text: "Khám phá",
        end: true,
        icons: <FaCircleDot size={24}/>
    },
    {
        path: "zing-chart",
        text: "#zingchart",
        icons: <FaChartLine size={24}/>
    },
    {
        path: "follow",
        text: "Theo dõi",
        icons: <BsJournalText size={24}/>
    },
]