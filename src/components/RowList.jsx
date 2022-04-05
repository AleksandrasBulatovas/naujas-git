import Row from "./Row";

const RowList = (props) => {
  console.log(props)
  
  return (
    <>
      {props.data.members?.map((member,i) => (
        <Row
          key={i}
          name={member.name}
          age={member.age}
          secretIdentity={member.secretIdentity}
          power={member.power}
        />
      ))}
    </>
  );
};

export default RowList;
