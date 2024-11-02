import classes from '@/app/meals/page.module.css'
import MealGrid from '@/Components/Meals Grid/meals-grid';
import Link from 'next/link';
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{''} <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose yours favorite recipes.</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>Share your favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
       <MealGrid meals={[]}/>
      </main>
    </>
  );
}
