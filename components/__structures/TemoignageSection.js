import React from "react";
import { TemoignageItem } from "../TemoignageItem";

export default function TemoignageSection() {
  return (
    <React.Fragment>
      <>
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 px-2 py-1 text-xs font-bold inline-block">
                Temoignage Clients
              </div>
            </div>
            <h1 className="font-heading text-center text-4xl lg:text-5xl font-bold mb-12 max-w-3xl mx-auto">
              Decouvrez ce que nos clients disent d'authentic-dev
            </h1>
            <div className="flex flex-nowrap -m-4 ">
              {/* temoignage utilisateur */}
              <TemoignageItem
                image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                author=" Francois Ngamo"
                message="Authentic-dev c'est la meilleur startup produisant de la qualites pour tout les budgets"
                jobName="CEO"
                Entreprise="Founder at Facebook"
              />
              <TemoignageItem
                image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                author=" Francois Ngamo"
                message="Authentic-dev c'est la meilleur startup produisant de la qualites pour tout les budgets"
                jobName="CEO"
                Entreprise="Founder at Facebook"
              />
              <TemoignageItem
                image="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
                author=" Francois Ngamo"
                message="Authentic-dev c'est la meilleur startup produisant de la qualites pour tout les budgets"
                jobName="CEO"
                Entreprise="Founder at Facebook"
              />
              <TemoignageItem
                image="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                author=" Francois Ngamo"
                message="Authentic-dev c'est la meilleur startup produisant de la qualites pour tout les budgets"
                jobName="CEO"
                Entreprise="Founder at Facebook"
              />
            </div>
            <div className="flex flex-nowrap justify-end -m-4">
              <TemoignageItem
                image="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                author=" Francois Ngamo"
                message="Authentic-dev c'est la meilleur startup produisant de la qualites pour tout les budgets"
                jobName="CEO"
                Entreprise="Founder at Facebook"
                directionAnimate="animate-movingRight"
              />

              <TemoignageItem
                image="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                author=" Francois Ngamo"
                message="Authentic-dev c'est la meilleur startup produisant de la qualites pour tout les budgets"
                jobName="CEO"
                Entreprise="Founder at Facebook"
                directionAnimate="animate-movingRight"
              />
              <TemoignageItem
                image="https://images.unsplash.com/photo-1497551060073-4c5ab6435f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=367&q=80"
                author=" Francois Ngamo"
                message="Authentic-dev c'est la meilleur startup produisant de la qualites pour tout les budgets"
                jobName="CEO"
                Entreprise="Founder at Facebook"
                directionAnimate="animate-movingRight"
              />
               <TemoignageItem
                image="https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
                author=" Ibrahim Traore"
                message="Authentic-dev c'est la meilleur startup produisant de la qualites pour tout les budgets"
                jobName="CEO"
                Entreprise="Founder at Facebook"
                directionAnimate="animate-movingRight"
              />
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}
