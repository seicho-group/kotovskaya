import "./nav-button.css"

export function NavButton(props: any) {
  return (
    <button className="navbutton">
      <p className={"category__name__nav"}>{props.category}</p>
    </button>
  )
}
