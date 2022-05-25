import {warframeList} from "../datas/warframeList";

function Tabframe () {
    return (
        <table>
            {
                warframeList.map(function(wl) {

                    let frames = wl.frames.map(function(frame) {
                        return (
                            <td>{frame.parts}</td>
                        )
                    });

                    return (
                        <tr>
                            <td>{wl.name}</td>
                            <td>{wl.neuroptic}</td>
                            <td>{wl.system}</td>
                            <td>{wl.chasis}</td>
                            <td>{wl.blueprint}</td>
                            {frames}
                        </tr>
                    )
                })
            }
        </table>
    ) 
}

export default Tabframe

