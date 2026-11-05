---
title: "Espiritualidad"
description: "Cómo funciona la Espiritualidad en Mysterria: Espiritualidad máxima por Secuencia y Sendero, regeneración, lo que le hacen la Locura y el Cansancio y qué pasa si te quedas sin ella."
sidebar:
  label: Espiritualidad
  order: 7
---

La **Espiritualidad** es la energía que gastan tus habilidades, y se rellena sola con el tiempo. Quedarte sin ella no te mata, pero puede empujarte hacia la Locura.

Se ve en la barra azul de arriba de tu pantalla (o en la barra que puedes mover del [Client Mod](/es/guides/client-mod/)) y en tu pantalla de personaje (`/coi menu character`).

## ¿Cuánta Espiritualidad tengo?

Tu Espiritualidad máxima se calcula así.

**Máximo = base de tu Secuencia × (0,5 + 0,5 × tu progreso de Actuación) × el multiplicador de tu Sendero**

Justo después de avanzar, con un 0 % de Actuación, tienes **la mitad** de tu máximo completo. Crece mientras actúas y llega al valor completo con un 100 % de Actuación. En la Secuencia 0 siempre cuenta como completo.

| Secuencia | Base |
|---|---:|
| 9 | 100 |
| 8 | 250 |
| 7 | 500 |
| 6 | 1 000 |
| 5 | 2 500 |
| 4 | 5 000 |
| 3 | 10 000 |
| 2 | 25 000 |
| 1 | 70 000 |
| 0 | 100 000 |

### Multiplicadores por Sendero

Los Senderos que no salen aquí usan x1,0.

| Sendero | Multiplicador por Secuencia |
|---|---|
| Fool | x1,1 en la 9, x1,15 en la 8, x1,2 en la 7, x1,25 de la 6 a la 5, x1,4 de la 4 a la 3, x1,6 de la 2 a la 0 |
| Moon | x1,08 de la 9 a la 3, x1,7 en la 2, x1,8 en la 1, x1,89 en la 0 |
| Door | x1,0 de la 9 a la 8, x1,2 de la 7 a la 5, x1,35 de la 4 a la 3, x1,5 en la 2, x1,65 de la 1 a la 0 |
| Red Priest | x1,02 en la 9, x1,08 en la 8, x1,15 en la 7, x1,25 en la 6, x1,3 de la 5 a la 4, x1,4 en la 3, x1,55 de la 2 a la 0 |
| Wheel of Fortune | x1,1 en la 9, x1,15 de la 8 a la 7, x1,4 en la 6, x1,45 de la 5 a la 0 |
| Darkness | x1,15 de la 9 a la 7, x1,3 de la 6 a la 0 |
| Death | x1,1 en la 9, x1,15 en la 8, x1,2 de la 7 a la 0 |
| Hanged Man | x1,05 en la 9, x1,12 de la 8 a la 0 |
| Twilight Giant | x1,0 de la 9 a la 5, x1,2 de la 4 a la 0 |

Una Deidad Moon tiene unos 189 000 de Espiritualidad, y un Seer de Secuencia 9 con la Actuación completa tiene 110.

### ¿Qué más cambia mi máximo?

- Las [Gracias](/es/magic/boons/) suman su propia parte encima de tu Sendero.
- **Path of Shortcut** (una bonificación inicial) baja tu máximo un **10 % para siempre**, en todas las Secuencias. Mira [Inicio rápido](/es/general/start/#4-elige-tu-bonificación-inicial).
- Romper un contrato de **Notarization** de Sun se puede castigar con **Spiritual Binding**, que también baja tu máximo un 10 %.
- Una **Unicidad** y algunas habilidades pasivas lo suben. La Nocturnality de un Trascendente Darkness lo sube de noche.

## ¿Qué tan rápido vuelve?

Cada segundo recuperas **1/400 de tu máximo, más 1**. Un Trascendente de Secuencia 9 con 100 de Espiritualidad recupera más o menos 1 por segundo, y uno de Secuencia 4 con 5 000 recupera unos 13. Una barra vacía se rellena en menos de 7 minutos si nada la frena.

La Locura y el Cansancio la frenan, y los dos se suman.

| Locura | Velocidad de regeneración |
|---|---|
| Menos del 25 % | Completa |
| 25 % o más | 80 % |
| 50 % o más | 60 % |
| 75 % o más | 30 % |

| Cansancio | Velocidad de regeneración |
|---|---|
| Menos de 65 | Completa |
| 65 o más | 85 % |
| 85 o más | 70 % |

Con un 75 % de Locura y 85 de Cansancio a la vez solo regeneras al 21 % de velocidad.

### Formas de rellenarla más rápido

- **Spiritualism** (Fool y Darkness, Secuencia 9) suma un 1 % de tu máximo cada 5 segundos.
- Solo puedes tener **una** pasiva de regeneración de Espiritualidad activada a la vez, aunque tengas varias.
- Las **pociones de Espiritualidad** te devuelven de golpe parte de tu Espiritualidad. Están en los intercambios de Helping Cards de las [mazmorras](/es/guides/dungeons/).
- Una iglesia puede darte el regalo **Spirituality Restore**. Mira [Iglesias](/es/magic/churches/).

## ¿Qué pasa cuando me queda poca?

- Cada 2,5 minutos que pasas **por debajo del 10 %** suma un **1 % de Locura**.
- Si te falta Espiritualidad para lanzar algo, el juego te deja pagar lo que falta con Locura, a un **0,2 % de Locura por cada punto que falta**. Se niega si eso te llevaría al 90 % de Locura o más, y la negativa también desactiva todas tus habilidades activadas.
- **Al llegar a 0**, todas las habilidades activadas se desactivan.

En las Secuencias altas un solo lanzamiento puede costar miles. Mira [Locura y mutación](/es/magic/mutation/) para saber lo que hace la Locura, y [Estados](/es/magic/conditions/) para el Cansancio.
