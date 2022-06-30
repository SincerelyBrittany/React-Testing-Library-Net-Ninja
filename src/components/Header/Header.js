import React from "react";
import "./Header.css";

// export default function Header({
//     title
// }) {
//     return <h1 className="header">{title}</h1>
// }

// export default function Header({ title }) {
//   return (
//     <>
//       <h1 className="header">{title}</h1>
//       <h3 title="subHeader" className="subheader">
//         SubHeading
//       </h3>
//     </>
//   );
// }

export default function Header({ title }) {
  return (
    <>
      <h1 className="header" data-testid="header-1">
        {title}
      </h1>
      <h3 title="subHeader" className="subheader">
        SubHeading
      </h3>
    </>
  );
}
