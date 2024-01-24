import React from "react"

function index({ interests }) {
    return (
        <div className="yui-gf last">
          <div className="yui-u first">
            <h2>Interests</h2>
          </div>
          {interests!==undefined && interests.map((item, index) => {
            return (
              <div className="yui-u" key={index}>
                <h2>
                  {item.description}
                </h2>
              </div>
            )
          })}
        </div>
      )
}

export default index
