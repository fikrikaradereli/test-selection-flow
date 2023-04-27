import ReactFlow, { MiniMap, Controls, Background, Panel } from 'reactflow';
import 'reactflow/dist/style.css';

import DownloadButton from './DownloadButton';

import nodes from './nodes.jsx';
import edges from './edges.js';

export default function App() {

  return (
    <>
      <h1>Hypothesis Tests</h1>
      <div className="wrapper" id="download-image" style={{ width: '90vw', height: '70vh' }}>
        <DownloadButton />
        <ReactFlow
          defaultNodes={nodes}
          defaultEdges={edges}
          // nodesDraggable={false}
          nodesConnectable={false}
          nodesFocusable={false}
          edgesFocusable={false}
          elementsSelectable={false}
          // panOnDrag={false}
          // zoomOnScroll={false}

          fitView
        >
          <Panel position="top-left" style={{ border: '2px solid rgb(200, 200, 200, 0.8)', borderRadius: '5px', width: '270px', padding: '10px 20px', background: 'white' }}>
            On the bottom left you see the <strong>Controls</strong> and the bottom right the <strong>MiniMap</strong> and last but not least <strong>Download</strong> button on the top right. 🥳
          </Panel>
          <Controls />
          <MiniMap zoomable pannable />
          <Background variant="cross" size={4} color="#fecde3" />
        </ReactFlow>
      </div>
    </>
  );
}