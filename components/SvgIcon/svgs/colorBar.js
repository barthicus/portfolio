export default {
  content: (
    <g>
      {[...Array(18).keys()].map(number => (
        <rect key={number} />
      ))}
    </g>
  )
};
