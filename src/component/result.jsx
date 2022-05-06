import "../style/css/result.css";


const Result = ({data, getFilter}) => {



    return ( 
        <section className="jobPost">
            <div className="left-side">
                <div className="logo">
                    <img src={data.logo} alt="company logo" />
                </div>
                <div className="details">
                    <div className="top-row">
                        <p>{data.company}</p>
                        {data.new && <p>NEW!</p>}
                        {data.featured && <p>FEATURED</p>}
                    </div>
                    <h2 className="position">{data.position}</h2>
                    <div className="bottom-row">
                        <p>{data.postedAt}</p>
                        <p>{data.contract}</p>
                        <p>{data.location}</p>
                    </div>
                </div>
            </div>

            <div className="tags">
                <p onClick={() => getFilter(data.role)}>{data.role}</p>
                <p onClick={() => getFilter(data.level)}>{data.level}</p>
                {data.languages.map(item => <p key={item} onClick={() => getFilter(item)}>{item}</p>)}
                {data.tools.map(item => <p key={item} onClick={() => getFilter(item)}>{item}</p>)}
            </div>
        </section>
     );
}
 
export default Result;
