import CardLayout from "../../layouts/CardLayout";
const Chosse = ({ image, text }) => {
  return (
    <CardLayout>
      <h5 className=" text-center text-2xl font-bold text-white ">TERPILIH</h5>
      <img src={image} alt="" />
      <p className="font-normal text-xl uppercase text-center text-gray-200">
        {text}
      </p>
    </CardLayout>
  );
};

export default Chosse;
