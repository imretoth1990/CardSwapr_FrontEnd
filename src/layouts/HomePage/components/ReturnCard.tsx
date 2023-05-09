import CardModel from "../../../models/CardModel";

export const ReturnCard: React.FC<{ card: CardModel }> = (props) => {
  return (
    <div className="col-xs-6 col-sm-6 col-md-4 col-lg-3 mb-3">
      <div className="text-center">
        {props.card.img ? (
          <img src={props.card.img} width="151" height="233" alt="Card1" />
        ) : (
          <img
            src={"https://static.wikia.nocookie.net/mtgsalvation_gamepedia/images/5/5c/Cardback_reimagined.png/revision/latest?cb=20180404100027"}
            width="151"
            height="233"
            alt="Card1"
          />
        )}
        <h6 className="mt-2">{props.card.name}</h6>
        <p>
          Power: {props.card.power} Toughness: {props.card.toughness}
        </p>
        <p>Artist: {props.card.artist}</p>
        <a className="btn main-color text-white" href="#">
          Reserve
        </a>
      </div>
    </div>
  );
};
