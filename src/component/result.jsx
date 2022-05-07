import "../style/css/result.css";


const Result = ({data, getFilter}) => {



    return ( 
        <section className="jobPost" style={{borderColor: data.featured ? "" : "transparent"}}>
            <div className="leftSide">
                <div className="logo">
                    <img src={data.logo} alt="company logo" />
                </div>
                <div className="details">
                    <div className="topRow">
                        <p className="companyName">{data.company}</p>
                        {data.new && <p className="newBadge badge">NEW!</p>}
                        {data.featured && <p className="featuredBadge badge">FEATURED</p>}
                    </div>

                    <h2 className="position">{data.position}</h2>

                    <div className="bottomRow">
                        <p>{data.postedAt}</p>
                        <p>{data.contract}</p>
                        <p>{data.location}</p>
                    </div>
                </div>
            </div>

            <div className="tags">
                <p className="tag" onClick={() => getFilter(data.role)}>{data.role}</p>
                <p className="tag" onClick={() => getFilter(data.level)}>{data.level}</p>
                {data.languages.map(item => <p className="tag" key={item} onClick={() => getFilter(item)}>{item}</p>)}
                {data.tools.map(item => <p className="tag" key={item} onClick={() => getFilter(item)}>{item}</p>)}
            </div>
        </section>
     );
}
 
export default Result;
