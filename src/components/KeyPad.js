function KeyPad(props) 
{
    const buttons = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '=', '/']

    return (
      <div>
        <div className="key-pad-title"><span>Key Pad</span></div>
        <div className="key-pad-holder">
          <div className="key-pad-face">
            <div className="key-pad-result-holder">
              <input type="text" value={props.display} class="key-pad-display" readOnly></input><br></br>
              <input type="text" value={props.calculation} class="key-pad-calculation" readOnly></input>
            </div>
            <div className="key-pad-keys">
              {
                buttons.map(label => 
                  {
                    switch (label)
                    {
                      case '+':
                      case '-':
                      case '*':
                      case '/':
                        return <div className="key-pad-key" onClick={() => props.change(label)}>{label}</div>
                      case 'C':
                        return <div className="key-pad-key key-pad-clear" onClick={() => props.clear()}>C</div>
                      case '=':
                        return <div className="key-pad-key" onClick={() => props.doCalc()}>=</div>
                      default:
                        return <div className="key-pad-key" onClick={() => props.save(label)}>{label}</div>
                    }
                  })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default KeyPad;