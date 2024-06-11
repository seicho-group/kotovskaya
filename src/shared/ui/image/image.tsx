import pic from "../../assets/mockphoto.png"

export function Image(props: any) {
  return (
    <img
      style={{ width: props.width ?? "100%", aspectRatio: "1/1" }}
      onError={(e) => {
        // @ts-ignore
        e.target.src = pic
      }}
      className="card__pic"
      src={
        props.imageLink
          ? `https://storage.yandexcloud.net/kotovskaya.products/${props.imageLink}`
          : pic
      }
      alt="фотография не загрузилась"
    />
  )
}
