import React from 'react';

const Donut = ({ pieces, swatches }) => {
  const rotation = [124.75504322766571, 288.75504322766571];
  const refArray = pieces;

  return (
    <React.Fragment>
      <svg height="100%" width="100%" viewBox="0 0 160 160">
        {/* <g className="circle circle-1" transform="translate(-400, 0) rotate(-90, 80, 80)">
    <circle className="outline" cx="80" cy="80" fill="transparent" r="60" stroke="#eee" strokeWidth="30" />
    <circle cx="80" cy="80" fill="transparent" r="60" stroke="#6495ED" strokeDasharray="374.99111843077515" strokeDashoffset="235.75525273624842" strokeWidth="30" />
  </g>
  <g className="circle circle-2" transform="translate(-200, 0) rotate(44.87031700288185, 80, 80)">
    <circle className="outline" cx="80" cy="80" fill="transparent" r="60" stroke="#eee" strokeWidth="30" />
    <circle cx="80" cy="80" fill="transparent" r="60" stroke="goldenrod" strokeDasharray="374.99111843077515" strokeDashoffset="293.33602875017084" strokeWidth="30" />
  </g> */}
        {rotation.map((angle, i) => (
          <g
            ref={ref => (refArray[i] = ref)}
            className="circle circle-3"
            key={`g${i}`}
            transform={`rotate(${angle}, 80, 80)`}
          >
            {/* <circle className="outline" cx="80" cy="80" fill="transparent" r="60" stroke="#eee" strokeWidth="30" /> */}
            <circle cx="80" cy="80" fill="none" r="60" stroke={swatches[i]} strokeDasharray="374" strokeDashoffset="310" strokeWidth="30" />
          </g>))}
        {/* <g className="circle circle-3" transform="rotate(124.75504322766571, 80, 80)">
            <circle cx="80" cy="80" fill="none" r="60" stroke={hightlightBlock || '#cd5c5c'} strokeDasharray="374" strokeDashoffset="310" strokeWidth="30" />
          </g>
          <g className="circle circle-3" transform="rotate(288.75504322766571, 80, 80)">
            <circle cx="80" cy="80" fill="none" r="60" stroke={hightlightBlock || '#cd5c5c'} strokeDasharray="374" strokeDashoffset="310" strokeWidth="30" />
          </g> */}
        {/* <g className="circle circle-4" transform="translate(200, 0) rotate(184.4092219020173, 80, 80)">
    <circle className="outline" cx="80" cy="80" fill="transparent" r="60" stroke="#eee" strokeWidth="30" />
    <circle cx="80" cy="80" fill="transparent" r="60" stroke="thistle" strokeDasharray="374.99111843077515" strokeDashoffset="322.66963162518795" strokeWidth="30" />
  </g>
  <g className="circle circle-5" transform="translate(400, 0) rotate(236.28242074927954, 80, 80)">
    <circle className="outline" cx="80" cy="80" fill="transparent" r="60" stroke="#eee" strokeWidth="30" />
    <circle cx="80" cy="80" fill="transparent" r="60" stroke="lightgray" strokeDasharray="374.99111843077515" strokeDashoffset="341.6821520071435" strokeWidth="30" />
  </g> */}
      </svg>
    </React.Fragment>);
};

export default Donut;
