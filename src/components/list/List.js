import "../list/List.css"
import Link from "next/link";

const List = ({items}) =>{

    return (
        <ul className="nav__list">
            {items.map((item, index) =>{
                 return (
                    <li key={index}>
                        <Link href={item.url} passHref>
                            {item.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    )
}


export default List;