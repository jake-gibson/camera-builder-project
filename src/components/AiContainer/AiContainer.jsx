import whiteSquare from '../../assets/blank-white-background.jpg';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCompared } from '../../reducers/equipmentSlice';
import { useCompareProductsMutation } from '../../reducers/fetchingAPI';

const AiContainer = () => {
  const dispatch = useDispatch();
  const firstObj = useSelector((state) => state.equip.aiComparison.firstBuild);
  const secondObj = useSelector(
    (state) => state.equip.aiComparison.secondBuild
  );
  const compared = useSelector((state) => state.equip.aiComparison.compared);

  // for OPTION 2:
  // const comparisonResponse = useSelector(
  //   (state) => state.equip.aiComparison.comparisonResponse
  // );

  const searchParams = new URLSearchParams({
    productTitle: firstObj?.title,
    comparisonProduct: secondObj?.title,
  });

  /**   OPTION 1:  */
  // const [aiResponse, setAiResponse] = useState('');

  // const compareProducts = () => {
  //   if (!firstObj.loaded || !secondObj.loaded) return;

  //   fetch(`/aiProductInfo?${searchParams.toString()}`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res.aiRes);
  //       dispatch(toggleCompared());
  //       setAiResponse(res.aiRes);
  //     });
  // };

  /** OPTION 3 */
  const [compareProduct, { data, error, isLoading }] =
    useCompareProductsMutation();
  const compareProductAndDispatch = () => {
    compareProduct(searchParams);
    dispatch(toggleCompared());
  };

  return (
    <div id="ai-container" className={''}>
      {!firstObj.loaded && (
        <h4 className="instructions">
          Please populate the builder tool above by selecting from the menus
          below
        </h4>
      )}
      {firstObj.loaded && (
        <>
          <div className="obj">
            <div className="obj-title">
              <h4>{firstObj.title || ''}</h4>
            </div>
            <div className="ai-img">
              <img src={`${firstObj.imgURL}` || ''}></img>
            </div>
          </div>
          {secondObj.loaded === true ? (
            <div className="obj">
              <div className="obj-title">
                {!secondObj.title ? (
                  <h4>Other Produc</h4>
                ) : (
                  <h4>{secondObj.title || ''}</h4>
                )}
              </div>
              <div className="ai-img">
                {secondObj.imgURL === 'none' ? (
                  <img src={whiteSquare}></img>
                ) : (
                  <img src={`${secondObj.imgURL}` || ''}></img>
                )}
              </div>
            </div>
          ) : (
            <div className="obj">
              <div className="obj-title">
                <h4>Other Product</h4>
              </div>
              <div className="ai-img">
                {secondObj.imgURL === 'none' && (
                  <img id="empty-img" src={whiteSquare}></img>
                )}
              </div>
            </div>
          )}
          {!compared ? (
            <div className="select-instructions">
              <h5>Select two different products to compare</h5>
              {/* <button onClick={compareProducts}> */}
              {/* <button onClick={() => dispatch(toggleCompared())}> */}
              <button onClick={() => compareProductAndDispatch()}>
                Compare
              </button>
            </div>
          ) : // <p>{aiResponse}</p>

          // <p>{comparisonResponse}</p>

          isLoading ? (
            // <div style={{ display: 'flex', width: '100%' }}>
            <h5
              className="loading"
              style={{ textAlign: 'center', justifySelf: 'center' }}
            >
              Comparing...
            </h5>
          ) : (
            // </div>
            <p>{data}</p>
          )}
        </>
      )}
    </div>
  );
};

export default AiContainer;
