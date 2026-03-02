import TrueFocus from "@/Animation/TrueFocus";

const Title = ({ title }) => {
  return (
    <TrueFocus
      sentence={title}
      manualMode={false}
      blurAmount={5}
      borderColor="red"
      animationDuration={2}
      pauseBetweenAnimations={1}
    />
  );
};

export default Title;
