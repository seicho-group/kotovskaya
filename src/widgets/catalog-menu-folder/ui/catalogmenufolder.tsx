import './catalogmenufolder.css'
import photo from './../../assets/mock.png'

export function CatalogMenuFolder(props: any) {
  return (
    <>
      <div className="folder">{props.category}</div>
      {/*{props.isActive ? <div>{props.podcategories}</div> : null}*/}
    </>
  )
}
