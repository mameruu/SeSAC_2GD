function ListChild(props) {
  const { tittle, content } = props;
  return (
    <div>
      {/* h2+p+hr  -> 한방에 써짐! */}
      <h2>{tittle}</h2>
      <p>{content}</p>
      <hr />
    </div>
  );
}

export default ListChild;
