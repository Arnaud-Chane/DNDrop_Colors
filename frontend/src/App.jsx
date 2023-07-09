import { useState } from "react";
import "./app.css";

function App() {
  const  [widgets, setWidgets] = useState([]);

  function handleOnDrag(e, widgetType) {
    e.dataTransfer.setData("widgetType", widgetType );
  }
  
  function handleOnDrop(e) {
    const widgetType = e.dataTransfer.getData("widgetType");
    console.log("widgetType", widgetType);
    setWidgets([...widgets, widgetType]);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }


  return (
    <div className="App">
      <div className="widgets">
        <div 
        className="widget"
        draggable
        onDragStart={(e) => handleOnDrag(e, "Widget A")}
        >
          Widget A
        </div>
        <div 
        className="widget"
        draggable
        onDragStart={(e) => handleOnDrag(e, "Widget B")}
        >
          Widget B
        </div>
        <div 
        className="widget"
        draggable
        onDragStart={(e) => handleOnDrag(e, "Widget C")}
        >
          Widget C
        </div>
      </div>
      <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver} >
        {widgets.map((widget, index) => (
            <div className="dropped-widget" key={index} >
              {widget}
            </div>

        ))}
      </div>

    </div>
  )
}

export default App
