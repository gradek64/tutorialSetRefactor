
/* TEXT TRANSITIONS */
function txtAnimIn(el, anim, tl, stagger="", del) {

	if(stagger == 'lines') {el = el.lines;	staggerAmt = 0.12;} 
	else if (stagger == 'characters') {	el = el.chars;	staggerAmt = 0.01;} 
	else { el = el.elements[0]; staggerAmt = 0;}

	switch(anim) {
		case 'fadeInDown':
			return tl.from(el, {duration:0.4, alpha:0, y:'-=50', ease:'power2.out', stagger:-staggerAmt}, del); break;
		case 'fadeInUp':
			return tl.from(el, {duration:0.4, alpha:0, y:'+=50', ease:'power2.out', stagger:staggerAmt}, del); break;
		case 'fadeInRight':
			return tl.from(el, {duration:0.4, alpha:0, x:'-=50', ease:'power2.out', stagger:staggerAmt}, del); break;
		case 'fadeInLeft':
			return tl.from(el, {duration:0.4, alpha:0, x:'+=50', ease:'power2.out', stagger:staggerAmt}, del); break;
		case 'flipInX':
			return tl.from(el, {duration:0.5, alpha:0, scaleX:0, transformOrigin:'50% 0%', ease:'power2.out', stagger:staggerAmt}, del); break;
		case 'flipInY':
			return tl.from(el, {duration:0.3, alpha:0, scaleY:0, transformOrigin:'0% 50%', ease:'power2.out', stagger:staggerAmt}, del); break;
		case 'flipInXRight':
			return tl.from(el, {duration:0.3, alpha:0, scaleY:0, x:'-=30', transformOrigin:'0% 50%', ease:'power2.out', stagger:staggerAmt}, del); break;
		case 'flipInXLeft':
			return tl.from(el, {duration:0.3, alpha:0, scaleY:0, x:'+=30', transformOrigin:'0% 50%', ease:'power2.out', stagger:staggerAmt}, del); break;
		case 'flipInXDown':
			return tl.from(el, {duration:0.3, alpha:0, scaleY:0, y:'-=20', transformOrigin:'0% 50%', ease:'power2.out', stagger:staggerAmt}, del); break;
		case 'flipInXUp':
			return tl.from(el, {duration:0.3, alpha:0, scaleY:0, y:'+=20', transformOrigin:'0% 50%', ease:'power2.out', stagger:staggerAmt}, del); break;
		case 'scaleIn':
			return tl.from(el, {duration:0.4, alpha:0, scale:0.5, transformOrigin:'50% 50%', ease:'power2.out', stagger:staggerAmt}, del); break;
		default : //fade
			return tl.from(el, {duration:0.4, alpha:0, stagger:staggerAmt}, del)
	}

}

function txtAnimOut(el, anim, tl, stagger="", del) {

	if(stagger == 'lines') {el = el.lines;	staggerAmt = 0.1;} 
	else if (stagger == 'characters') {	el = el.chars;	staggerAmt = 0.01;} 
	else { el = el.elements[0]; staggerAmt = 0;}

	switch(anim) {
		case 'fadeInDown':
			return tl.to(el, {duration:0.4, alpha:0, y:'+=20', ease:'power2.in', stagger:-staggerAmt}, del); break;
		case 'fadeInUp':
			return tl.to(el, {duration:0.4, alpha:0, y:'-=20', ease:'power2.in', stagger:staggerAmt}, del); break;
		case 'fadeInRight':
			return tl.to(el, {duration:0.4, alpha:0, x:'+=20', ease:'power2.in', stagger:-staggerAmt}, del); break;
		case 'fadeInLeft':
			return tl.to(el, {duration:0.4, alpha:0, x:'-=20', ease:'power2.in', stagger:staggerAmt}, del); break;
		case 'flipInX':
			return tl.to(el, {duration:0.3, alpha:0, scaleX:0, transformOrigin:'50% 0%', ease:'power2.in', stagger:-staggerAmt}, del); break;
		case 'flipInY':
			return tl.to(el, {duration:0.2, alpha:0, scaleY:0, transformOrigin:'0% 50%', ease:'power2.in', stagger:staggerAmt}, del); break;
		case 'flipInXRight':
			return tl.to(el, {duration:0.2, alpha:0, scaleY:0, x:'+=15', transformOrigin:'0% 50%', ease:'power2.in', stagger:staggerAmt}, del); break;
		case 'flipInXLeft':
			return tl.to(el, {duration:0.2, alpha:0, scaleY:0, x:'-=15', transformOrigin:'0% 50%', ease:'power2.in', stagger:staggerAmt}, del); break;
		case 'flipInXDown':
			return tl.to(el, {duration:0.2, alpha:0, scaleY:0, y:'+=15', transformOrigin:'0% 50%', ease:'power2.in', stagger:-staggerAmt}, del); break;
		case 'flipInXUp':
			return tl.to(el, {duration:0.2, alpha:0, scaleY:0, y:'-=15', transformOrigin:'0% 50%', ease:'power2.in', stagger:staggerAmt}, del); break;
		case 'scaleIn':
			return tl.to(el, {duration:0.3, alpha:0, scale:0.5, transformOrigin:'50% 50%', ease:'power2.in', stagger:-staggerAmt}, del); break;
		default : //fade
			return tl.to(el, {duration:0.2, alpha:0, stagger:staggerAmt}, del)
	}

}


/* - - - - - - - - - - - - - - - - */

/* IMAGE TRANSITIONS */

function imgAnimOut(el, anim, tl, del=null, bw, bh) {

	switch(anim) {
		case 'slideUp':
			if(!del) del = 0;
			return tl.to(el, {duration:0.5, y:'-='+bh/100*40, alpha:1, ease:'power2.in'}, del); break;
		case 'slideDown':
			if(!del) del = 0;
			return tl.to(el, {duration:0.5, y:'+='+bh/100*40, alpha:1, ease:'power2.in'}, del); break;
		case 'slideLeft':
			if(!del) del = 0;
			return tl.to(el, {duration:0.5, x:'-='+bw/100*40, alpha:1, ease:'power2.in'}, del); break;
		case 'slideRight':
			if(!del) del = 0;
			return tl.to(el, {duration:0.5, x:'+='+bw/100*40, alpha:1, ease:'power2.in'}, del); break;
		case 'scaleIn':
			if(!del) del = 0.1;
			return tl.to(el, {duration:0, alpha:1}, del); break;
		case 'scaleOutAndFade':
			if(!del) del = 0;
			return tl.to(el, {duration:0.7, scale:2, alpha:1, ease:'power2.in'}, del); break;
		default : //fade
			if(!del) del = 0.1;
			return tl.to(el, {duration:0, alpha:1}, del); break;
	}

}

function imgAnimIn(el, anim, tl, del=null, bw, bh) {

	switch(anim) {
		case 'slideUp':
			if(!del) del = 0.2;
			return tl.fromTo(el, {y:'+='+bh, alpha:1}, {duration:0.7, y:0, alpha:1, ease:'power2.out'}, del); break;
		case 'slideDown':
			if(!del) del = 0.2;
			return tl.fromTo(el, {y:'-='+bh, alpha:1}, {duration:0.7, y:0, alpha:1, ease:'power2.out'}, del); break;
		case 'slideLeft':
			if(!del) del = 0.2;
			return tl.fromTo(el, {x:'+='+bw, alpha:1}, {duration:0.7, x:0, alpha:1, ease:'power2.out'}, del); break;
		case 'slideRight':
			if(!del) del = 0.2;
			return tl.fromTo(el, {x:'-='+bw, alpha:1}, {duration:0.7, x:0, alpha:1, ease:'power2.out'}, del); break;
		case 'scaleIn':
			if(!del) del = 0.2;
			return tl.fromTo(el, {scale:0.5, alpha:0}, {duration:0.7, scale:1, alpha:1, ease:'power2.out'}, del); break;
		case 'scaleOutAndFade':
			if(!del) del = 0.4;
			return tl.to(el, {duration:0.4, alpha:1}, del); break;
		default : //fade
			if(!del) del = 0.1;
			return tl.to(el, {duration:0.7, alpha:1}, del); break;
	}

}


/* - - - - - - - - - - - - - - - - */

/* CTA ANIMATIONS */

function ctaAnimIn(cta, cta_txt, anim, tl, del, bw, bh) {

	switch(anim) {
		case 'flipInY': 
			return 	tl.from(cta, {duration:0.4, scaleY:0, ease:'power2.out'}, del)
						.from(cta_txt, {duration:0.3, scale:0.5, alpha:0, ease:'power2.out', onComplete:function(){initCTAHover()}}, '-=0.3'); break;
		case 'flipInX': 
			return 	tl.from(cta, {duration:0.4, scaleX:0, ease:'power2.out'}, del)
						.from(cta_txt, {duration:0.3, scale:0.5, alpha:0, ease:'power2.out', onComplete:function(){initCTAHover()}}, '-=0.3'); break;
		case 'fadeUp': 
			return 	tl.from([cta, cta_txt], {duration:0.5, y:'+=30', alpha:0, ease:'power2.out', stagger:0.04, onComplete:function(){initCTAHover()}}, del); break;
		case 'fadeDown': 
			return 	tl.from([cta, cta_txt], {duration:0.5, y:'-=30', alpha:0, ease:'power2.out', stagger:0.04, onComplete:function(){initCTAHover()}}, del); break;
		case 'fadeRight': 
			return 	tl.from([cta, cta_txt], {duration:0.5, x:'-=30', alpha:0, ease:'power2.out', stagger:0.04, onComplete:function(){initCTAHover()}}, del); break;
		case 'fadeLeft': 
			return 	tl.from([cta, cta_txt], {duration:0.5, x:'+=30', alpha:0, ease:'power2.out', stagger:0.04, onComplete:function(){initCTAHover()}}, del); break;
		case 'slideUp': 
			return 	tl.from([cta, cta_txt], {duration:0.4, y:'+='+bh, alpha:0, ease:'power1.out', stagger:0.01, onComplete:function(){initCTAHover()}}, del); break;
		case 'slideDown': 
			return 	tl.from([cta, cta_txt], {duration:0.4, y:'-='+bh, alpha:0, ease:'power1.out', stagger:0.01, onComplete:function(){initCTAHover()}}, del); break;
		case 'slideRight': 
			return 	tl.from([cta, cta_txt], {duration:0.4, x:'-='+bw, alpha:0, ease:'power1.out', stagger:0.03, onComplete:function(){initCTAHover()}}, del); break;
		case 'slideLeft': 
			return 	tl.from([cta, cta_txt], {duration:0.4, x:'+='+bw, alpha:0, ease:'power1.out', stagger:0.03, onComplete:function(){initCTAHover()}}, del); break;
		case 'scaleIn': 
			return 	tl.from([cta, cta_txt], {duration:0.4, scale:0.4, alpha:0, ease:'power2.out', stagger:0.08, onComplete:function(){initCTAHover()}}, del); break;
		case 'scaleInBounce': 
			return 	tl.from([cta, cta_txt], {duration:0.4, scale:0.4, alpha:0, ease:'back.out(3)', stagger:0.08, onComplete:function(){initCTAHover()}}, del); break;
		default :
			return 	tl.from([cta, cta_txt], {duration:0.4, alpha:0, stagger:0.03, onComplete:function(){initCTAHover()}}, del); break;
	}

}

function ctaAnimHighlight(cta, cta_txt, anim, tl, del) {

	switch(anim) {
		case 'heartbeat': 
			return 	tl.to([cta,cta_txt], {duration:0.2, scale:1.1, ease:'sine.inOut', repeat:3, yoyo:true}, del); break;
		case 'rubberband': 
			return 	tl.to([cta, cta_txt], {
						keyframes: {
							"0%": { scaleX: 1, scaleY: 1 },
							"30%": { scaleX: 1.25, scaleY: 0.75 },
							"40%": { scaleX: 0.75, scaleY: 1.25 },
							"50%": { scaleX: 1.15, scaleY: 0.85 },
							"65%": { scaleX: 0.95, scaleY: 1.05 },
							"75%": { scaleX: 1.05, scaleY: 0.95 },
							"100%": { scaleX: 1, scaleY: 1 },
							easeEach: "sine.out"
						},
						duration: 0.8,
					}, del); break;
		case 'wobble': 
			return 	tl.to([cta, cta_txt], {
						keyframes: {
							"0%": { x: 0, rotation: 0 },
							"15%": { x: '-10%', rotation: -5 },
							"30%": { x: '8%', rotation: 3 },
							"45%": { x: '-6%', rotation: -3 },
							"60%": { x: '4%', rotation: 2 },
							"75%": { x: '-2%', rotation: -1 },
							"100%": { x: 0, rotation: 0 },
							easeEach: "sine.out"
						},
						duration: 0.8,
					}, del); break;
		case 'swing': 
			return 	tl.to([cta, cta_txt], {
						keyframes: {
							"0%": { rotation: 0 },
							"20%": { rotation: 15 },
							"40%": { rotation: -10 },
							"60%": { rotation: 5 },
							"80%": { rotation: -5 },
							"100%": { rotation: 0 },
						},
						duration: 0.8,
						transformOrigin: 'top center', 
					}, del); break;
		case 'bounce': 
			return 	tl.to([cta, cta_txt], {
						keyframes: {
							"0%": { y:0, scaleY:1 },
							"20%": { y:0, scaleY:1 },
							"40%": { y:-20, scaleY:1.1 },
							"43%": { y:-20, scaleY:1.1 },
							"53%": { y:0, scaleY:1 },
							"70%": { y:-10, scaleY:1.05 },
							"80%": { y:0, scaleY:0.95 },
							"90%": { y:-3, scaleY:1.02 },
							"100%": { y:0, scaleY:1 },
						},
						duration: 0.8,
						transformOrigin: 'center bottom', 
					}, del); break;
		case 'shake': 
			return 	tl.to([cta, cta_txt], {
						keyframes: {
							"0%": { x:0 },
							"12.5%": { x:-6 },
							"25%": { x:6 },
							"37.5%": { x:-6 },
							"50%": { x:6 },
							"62.5%": { x:-6 },
							"75%": { x:6 },
							"87.5%": { x:-6 },
							"100%": { x:0 },
							easeEach: "sine.inOut"
						},
						duration: 0.6,
						transformOrigin: 'center bottom', 
					}, del); break;
		default :
			return 	tl.to([cta,cta_txt], {duration:0.2, scale:1.1, ease:'sine.inOut', repeat:3, yoyo:true}, del); break;
	}

}