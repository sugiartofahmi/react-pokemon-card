import CardLayout from "../../layouts/CardLayout";

const Card = ({ image, text, children }) => {
  return (
    <CardLayout>
      <h5 className=" text-center text-2xl font-bold uppercase  text-white ">
        {text}
      </h5>
      <img className="mx-auto h-32" src={image} alt="" />
      {children}
    </CardLayout>
  );
};

export default Card;
