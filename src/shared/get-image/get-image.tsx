import { API_URL } from "../api/config"
export function Image(props: any) {
  return (
    <img
      onError={(e) => {
        // @ts-ignore
        e.target.src = pic
      }}
      className="card__pic"
      src={`https://storage.yandexcloud.net/kotovskaya.products/${props.imageLink}`}
      alt="фотография не загрузилась"
    />
  )
}
