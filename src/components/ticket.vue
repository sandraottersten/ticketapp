<template>
    <article class="ticket">
        <section class="what">
            <p class="type">what</p>
            <h1>{{ ticket.event.name }}</h1>
        </section>
        <section class="where">
            <p class="type">Where</p>
            <h2>{{ ticket.event.where.place }}</h2>
            <p>{{ ticket.event.where.city }}</p>
        </section>
        <section class="when">
            <p class="type">When</p>
            <h2>{{ ticket.event.when.date }}</h2>
        </section>
        <section class="from">
            <p class="type">From</p>
            <h2>{{ ticket.event.when.start }}</h2>
        </section>
        <section class="to">
            <p class="type">To</p>
            <h2>{{ ticket.event.when.end }}</h2>
        </section>
        <section class="info">
            <p class="type">Info</p>
            <p>{{ ticket.event.info }}</p>
        </section>
        <section class="code">
            <h1 class="barcode">
                {{ ticket.code }}
            </h1>
            <p class="utfcode">#{{ ticket.code }}</p>
        </section>
    </article>
</template>

<script>
export default {
    name: 'ticket',
    props: ['ticket']
}
</script>

<style scoped>

$baseline: 18px;

.ticket {
    position: absolute;
    max-width: 19rem;
    background: white;
    box-shadow: 0 0 3rem rgba($color: #000000, $alpha: .15);
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 30px;
    grid-template-rows: 100px;
    grid-template-areas:
    "what what what"
    "where where where"
    "when from to"
    "info info info"
    "code code code";
}
    ticket:nth-child(2) {
        transform: scale(.95) translate3d(0,-1.5rem,0);
        filter: brightness(.95);
    }

    ticket:nth-child(1) {
        transform: scale(.9) translate3d(0,-3.2rem,0);
        filter: brightness(.9);
    }

    .type {
        padding: .75rem 0 0 1rem;
        margin: 0;
        font-size: .6rem;
        letter-spacing: .05rem;
        font-weight: 600;
        text-transform: uppercase;

    }

    h2 {
        margin: 0;
        font-size: 1.25rem;
        padding: .125rem 1rem;
        font-weight: 500;
    }

    p {
        padding: .25rem 1rem;
        margin: 0;
    }

    .what {
        grid-area: what;
        background: rgba(255, 255, 255, .5);
    }
        h1 {
            margin: 0;
            padding: 0 0 1rem 1rem;
            font-size: 2rem;
            text-transform: uppercase;
        }
    .where {
        grid-area: where;
        background: rgba(255, 255, 255, .5);
    }

    .when {
        grid-area: when;
        background: rgba(255, 255, 255, .5);
        overflow: hidden;
    }

    .from {
        grid-area: from;
        background: rgba(255, 255, 255, .5);
        border-left: 1px dotted rgba($color: #000, $alpha: .4);
        border-right: 1px dotted rgba($color: #000, $alpha: .4);
    }

    .to {
        grid-area: to;
        background: rgba(255, 255, 255, .5);;
    }

    .info {
        grid-area: info;
        background: rgba(255, 255, 255, .5);
    }

    .code {
        grid-area: code;
        background: rgba(255, 255, 255, .5);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }
        .barcode {
            font-family: 'Libre Barcode 128', cursive;
            margin: 1rem 0 0 0;
            padding: 0;
            font-size: 5rem;
            font-weight: 100;
            color: black;
        }
        .utfcode {
            margin: -1.5rem 0 0 0;
            padding: 0;
            color: rgba(0, 0, 0, .6);
            letter-spacing: .25rem;
        }


</style>
