import React from 'react';

export default function About() {
    return (
        <div className='container my-3'>
            <h1>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            About us part 1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit repellat error sequi consectetur incidunt, cum voluptas inventore explicabo aliquid. Atque doloribus iste soluta molestiae, porro sed ad exercitationem odit?
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            About us part 2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique impedit non minima assumenda ab, quidem omnis ipsum aliquid ad veniam ducimus facere, qui nostrum, voluptates consectetur facilis ullam soluta velit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            About us part 3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore minus laborum iusto iste sunt eos voluptas, at odio odit. Eos deleniti cum libero. Illum pariatur animi vel aliquid consequuntur illo.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}