export default function DetailItem({ category, icon, altText, userScore }) {
  return (
    <li className={`detail__item detail__item--${category}`}>
      <div className={`detail__category-group`}>
        <img src={icon} alt={altText} />
        <span className="detail__category-title">{category}</span>
      </div>
      <div className="detail__result-group">
        <span className="detail__result-user">{userScore}</span>
        <span className="detail__result-max"> / 100</span>
      </div>
    </li>
  );
}
