import React from 'react';
import './Portfolio.css';
import 'animate.css';
import 'tachyons';


const Portfolio = () => {
  const style ={backgroundImage: 'url(http://mrmrs.github.io/images/0006.jpg)'}
  return (
    <div className="flex flex-wrap">
      <div className="w-100">
        <section className="tc center">
          <h2 className="fw3 f3 white-80 mt3 mb0">/ portfolio /</h2>
          <hr class="mw3 bb b--white-80 mb4" />
        </section>
      </div>
      <div className="w-20-ns w-third-m">
        <article className="center">
          <div className="tc">
            <h1 className="f3 mb2 moon-gray">template title</h1>
            <h2 className="f5 fw4 light-gray mt0">template project</h2>
          </div>
        </article>
      </div>
      <div className="w-20-ns w-third-m">
        <article className="center">
          <div className="tc">
            <h1 className="f3 mb2 moon-gray">template title</h1>
            <h2 className="f5 fw4 light-gray mt0">template project</h2>
          </div>
        </article>
      </div>
      <div className="w-20-ns w-third-m">
        <article className="center">
          <div className="tc">
            <h1 className="f3 mb2 moon-gray">template title</h1>
            <h2 className="f5 fw4 light-gray mt0">template project</h2>
          </div>
        </article>
      </div>
      <div className="w-20-ns w-third-m">
        <article className="center">
          <div className="tc">
            <h1 className="f3 mb2 moon-gray">template title</h1>
            <h2 className="f5 fw4 light-gray mt0">template project</h2>
          </div>
        </article>
      </div>
      <div className="w-20-ns w-third-m">
        <article className="center">
          <div className="tc">
            <h1 className="f3 mb2 moon-gray">template title</h1>
            <h2 className="f5 fw4 light-gray mt0">template project</h2>
          </div>
        </article>
      </div>
    </div>

  )
}

export default Portfolio;
