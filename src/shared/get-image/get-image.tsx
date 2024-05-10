import { API_URL } from "../api/config"
export function Image(props: any) {
  return (
    <img
      onError={(e) => {
        // @ts-ignore
        e.target.src = pic
      }}
      className="card__pic"
      src={`${API_URL}/images/${props.id}`}
      alt="alt"
    />
  )
}
