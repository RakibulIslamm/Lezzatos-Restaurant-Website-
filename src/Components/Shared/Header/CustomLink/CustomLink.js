import {
    Link,
    useMatch,
    useResolvedPath,
} from "react-router-dom";


const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                className={`relative transform ${match ? 'before:absolute before:border-b-2 before:border-[#D7B686] before:w-2/3 before:-bottom-2 before:left-1/2 before:-translate-x-1/2' : ''} after:absolute after:border-b-2 after:border-[#D7B686] after:w-0 after:-bottom-2 after:left-1/2 after:-translate-x-1/2 hover:after:w-2/3 after:transition-all after:ease-in-out after:duration-300`}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;