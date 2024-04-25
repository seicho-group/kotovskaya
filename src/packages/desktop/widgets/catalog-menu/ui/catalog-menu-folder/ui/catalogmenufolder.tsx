import "./catalogmenufolder.css";

export function CatalogMenuFolder(props: any) {
  return (
    <>
      <div className="folder">{props.category}</div>
      {/*{props.isActive ? <div>{props.podcategories}</div> : null}*/}
    </>
  );
}
