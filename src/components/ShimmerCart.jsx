const ShimmerCart = () => {
  return (
    <div className="shimmer-container">
      {/* Filter Section Shimmer */}
      <div className="s-filter">
        <div className="s-search">
          <div className="shimmer-box shimmer-search-placeholder"></div>
          <div className="shimmer-box shimmer-button-placeholder"></div>
        </div>
        <div className="shimmer-box shimmer-top-rated-placeholder"></div>
      </div>

      {/* Restaurant Cards Shimmer */}
      <div className="res-container-shimmer">
        {Array.from({ length: 20 }).map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image"></div>
            <div className="shimmer-line shimmer-title"></div>
            <div className="shimmer-line shimmer-rating"></div>
            <div className="shimmer-line shimmer-text"></div>
            <div className="shimmer-line shimmer-delivery"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerCart;
