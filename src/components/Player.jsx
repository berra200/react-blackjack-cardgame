export default function Player({ dealCard ,name}) {
    function handleHit() {
        dealCard()
        // console.log("kort utdelat");
    }
    return (
        <>
            <h2 className="text-2xl text-center mt-16">{name}</h2>
            <button className="bg-slate-300 rounded p-2" onClick={handleHit}>Hit</button>
        </>
    )
}
