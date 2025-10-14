const VerticalLine = ({ left = 20 }) => {
  return (
    <div
      className={`absolute top-[50px] bottom-0 w-[0.5px] bg-[#BFBCCC]`}
      style={{ left: `${left}px` }}
    ></div>
  );
};

export default VerticalLine;
