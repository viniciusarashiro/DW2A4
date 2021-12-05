import React from 'react';
import '../styles/Home.css'
import Card from './Card'
import Data from './Data'


const Home = () => {
    return (
        <>
            <h1>Tecnologias</h1>
            <div className="home">
                {Data.map((values) => {
                    return (
                        <Card
                            title={values.Stitle}
                            imgSource={values.imgsrc}
                            desc={values.desc}
                            btnHome={values.btnHome}
                            link={values.link}
                        />
                    )
                })}
            </div>

        </>
    )
}

export default Home;