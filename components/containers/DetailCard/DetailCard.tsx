import { DetailCardContainer } from "./DetailCard.style";

type Iprops = {
  cardValue?: number;
  cardName?: string;
};

const ChallengeDetailsCard = ({ cardValue, cardName }: Iprops) => {
  return (
    <DetailCardContainer>
      <p className="card-name">{cardName}</p>
      <p className="card-value">{cardValue}</p>
    </DetailCardContainer>
  );
};

export default ChallengeDetailsCard;
