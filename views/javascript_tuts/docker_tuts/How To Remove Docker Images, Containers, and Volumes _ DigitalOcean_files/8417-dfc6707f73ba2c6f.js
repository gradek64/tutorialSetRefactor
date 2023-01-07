"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8417],
  {
    2451: function (t, i, e) {
      e.d(i, {
        F: function () {
          return a;
        },
      });
      var o = e(88134),
        l = e(37797),
        n = l.ZP.div.withConfig({
          displayName: "DividerStyles__Divider",
          componentId: "sc-fd56qe-0",
        })(
          [
            "background-position:center right;background-repeat:repeat-x;display:block;height:",
            ";margin:",
            ";position:relative;width:100%;",
          ],
          function (t) {
            var i = t.height;
            return void 0 === i ? "4px" : i;
          },
          function (t) {
            var i = t.margin;
            return void 0 === i ? "0" : i;
          }
        ),
        a =
          ((0, l.ZP)(n).withConfig({
            displayName: "DividerStyles__LineDivider",
            componentId: "sc-fd56qe-1",
          })(["background-image:url('", "');"], function (t) {
            var i = t.color,
              e = void 0 === i ? o.ZP.gray6 : i;
            return 'data:image/svg+xml,%3Csvg viewBox="0 0 12 1" width="12" height="1" xmlns="http://www.w3.org/2000/svg"%3E%3Cline stroke="'.concat(
              encodeURIComponent(e),
              '" stroke-linecap="round" x1="0.5" y1="0.5" x2="4.5" y2="0.5"%3E%3C/line%3E%3C/svg%3E'
            );
          }),
          (0, l.ZP)(n).withConfig({
            displayName: "DividerStyles__TinyWaveDivider",
            componentId: "sc-fd56qe-2",
          })(["background-image:url('", "');"], function (t) {
            var i = t.color,
              e = void 0 === i ? o.ZP.gray6 : i;
            return 'data:image/svg+xml,%3Csvg viewBox="0 0 9 4" width="9" height="4" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M 0 3.512 L 0 2.344 C 0 1.768 0.165 1.309 0.496 0.968 C 0.826 0.627 1.274 0.456 1.84 0.456 C 2.213 0.456 2.533 0.531 2.8 0.68 C 3.077 0.829 3.317 1.016 3.52 1.24 C 3.722 1.453 3.909 1.672 4.08 1.896 C 4.261 2.109 4.448 2.291 4.64 2.44 C 4.842 2.589 5.072 2.664 5.328 2.664 C 5.594 2.664 5.797 2.579 5.936 2.408 C 6.085 2.227 6.16 1.976 6.16 1.656 L 6.16 0.488 L 7.136 0.488 L 7.136 1.656 C 7.136 2.232 6.976 2.691 6.656 3.032 C 6.336 3.373 5.898 3.544 5.344 3.544 C 4.96 3.544 4.629 3.469 4.352 3.32 C 4.074 3.171 3.834 2.989 3.632 2.776 C 3.429 2.552 3.237 2.333 3.056 2.12 C 2.885 1.896 2.704 1.709 2.512 1.56 C 2.32 1.411 2.101 1.336 1.856 1.336 C 1.578 1.336 1.36 1.427 1.2 1.608 C 1.05 1.779 0.976 2.024 0.976 2.344 L 0.976 3.512 L 0 3.512 Z" fill="'.concat(
              encodeURIComponent(e),
              '"%3E%3C/path%3E%3C/svg%3E'
            );
          }));
    },
    98417: function (t, i, e) {
      e.d(i, {
        Z: function () {
          return jt;
        },
      });
      var o = e(37797),
        l = e(2451),
        n = e(57243),
        a = "/_next/static/media/seaFloorLeft.53f70537.svg",
        c = "/_next/static/media/seaFloorMiddle.b8dc47b6.svg",
        s = "/_next/static/media/seaFloorRight.9cccc865.svg",
        r = e(17534),
        d = e(88134),
        p = (0, o.iv)(
          [
            "background-color:",
            ";bottom:0;color:",
            ";left:0;min-height:595px;overflow:hidden;padding:0 24px;position:relative;text-align:center;p{color:",
            ";font-size:16px;font-weight:500;line-height:36px;}ul{list-style:none;text-align:left;a{color:",
            ";text-decoration:none;:hover{color:",
            ";}}}",
          ],
          d.ZP.blueLight,
          d.ZP.gray8,
          d.ZP.gray8,
          d.ZP.gray8,
          d.ZP.gray7
        ),
        m = (0, o.iv)(
          [
            "margin:0 auto;max-width:1200px;&:last-of-type{padding-top:20px;}",
            "{flex-wrap:wrap;.column.is-mobile.is-half{flex:none;width:50%;}}",
          ],
          (0, r.X)(r.A.tablet)
        ),
        u = o.ZP.div.withConfig({
          displayName: "FooterWWWStyles__FooterSeaWave",
          componentId: "sc-1ebq7el-0",
        })(
          [
            "background-color:",
            ";background-image:url(",
            ");display:flex;height:64px;overflow:hidden;position:relative;width:100%;",
          ],
          function (t) {
            return t.color || "transparent";
          },
          "/_next/static/media/footerWave.40ccbc0c.svg"
        ),
        w = o.ZP.div.withConfig({
          displayName: "FooterWWWStyles__FooterSeaFloor",
          componentId: "sc-1ebq7el-1",
        })(
          [
            "background-color:",
            ";display:flex;justify-content:space-between;max-height:104px;overflow:hidden;.seaFloorLeft{display:flex;margin-right:150px;max-width:273px;width:100%;}.seaFloorMiddle{display:flex;margin-right:150px;max-width:560px;width:100%;}.seaFloorRight{display:flex;max-width:294px;width:100%;}",
            "{.seaFloorRight{display:none;}}",
          ],
          d.ZP.blueLight,
          (0, r.X)(r.A.desktop)
        ),
        _ = e(90352),
        h = "/_next/static/media/do-logo-digitized.e5014337.svg",
        g = "/_next/static/media/socialBuiltinnyc.39adf06d.svg",
        x = "/_next/static/media/socialDev.c2375b02.svg",
        f = "/_next/static/media/socialFb.c716d8b2.svg",
        y = "/_next/static/media/socialGlassdoor.b7323088.svg",
        k = "/_next/static/media/socialInstagram.5fb5ecbd.svg",
        v = "/_next/static/media/socialLinkedin.7662d59b.svg",
        b = "/_next/static/media/socialTwitch.a40b5940.svg",
        j = "/_next/static/media/socialTwitter.26ed7e61.svg",
        C = "/_next/static/media/socialYoutube.3ea36203.svg",
        Z = (0, o.iv)(
          [
            "align-items:center;display:flex;justify-content:space-between;padding-left:0;padding-right:0;> div:first-of-type{align-items:center;display:flex;.logo{height:40px;margin-right:20px;width:40px;}.copyright{font-size:16px;font-weight:500;line-height:24px;}}img{margin-right:0;}",
            "{flex-direction:column;}",
          ],
          (0, r.X)(r.A.tablet)
        ),
        P = (0, o.iv)(
          [
            "align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:center;li{height:inherit;margin:5px 8px;:last-of-type{margin-right:0;}a{display:inline-block;height:inherit;transition:opacity 0.1s ease;:hover{opacity:0.75;transition:opacity 0.1s ease;}img{height:40px;}}}",
            "{margin-top:30px;}",
          ],
          (0, r.X)(r.A.tablet)
        ),
        S = (0, o.iv)(["display:flex;flex-wrap:wrap;justify-content:center;"]),
        N = e(85893),
        I = function () {
          return (0, N.jsxs)(D, {
            className: "column",
            size: 12,
            children: [
              (0, N.jsxs)(F, {
                children: [
                  (0, N.jsx)(n.Z, {
                    className: "logo",
                    src: h,
                    alt: "DigitalOcean logo",
                  }),
                  (0, N.jsx)("p", {
                    className: "copyright",
                    children: "\xa9 ".concat(
                      new Date().getFullYear(),
                      " DigitalOcean, LLC. All rights reserved."
                    ),
                  }),
                ],
              }),
              (0, N.jsxs)(L, {
                children: [
                  (0, N.jsx)("li", {
                    children: (0, N.jsx)(_.Z, {
                      rel: "nofollow",
                      id: "Twitchtv",
                      url: "https://www.twitch.tv/digitaloceantv",
                      children: (0, N.jsx)(n.Z, { src: b, alt: "Twitchtv" }),
                    }),
                  }),
                  (0, N.jsx)("li", {
                    children: (0, N.jsx)(_.Z, {
                      rel: "nofollow",
                      id: "Twitter",
                      url: "https://twitter.com/digitalocean",
                      children: (0, N.jsx)(n.Z, { src: j, alt: "Twitter" }),
                    }),
                  }),
                  (0, N.jsx)("li", {
                    children: (0, N.jsx)(_.Z, {
                      rel: "nofollow",
                      id: "Facebook",
                      url: "https://www.facebook.com/DigitalOceanCloudHosting",
                      children: (0, N.jsx)(n.Z, { src: f, alt: "Facebook" }),
                    }),
                  }),
                  (0, N.jsx)("li", {
                    children: (0, N.jsx)(_.Z, {
                      rel: "nofollow",
                      id: "Instagram",
                      url: "https://www.instagram.com/thedigitalocean/",
                      children: (0, N.jsx)(n.Z, { src: k, alt: "Instagram" }),
                    }),
                  }),
                  (0, N.jsx)("li", {
                    children: (0, N.jsx)(_.Z, {
                      rel: "nofollow",
                      id: "YouTube",
                      url: "https://www.youtube.com/user/DigitalOceanVideos",
                      children: (0, N.jsx)(n.Z, { src: C, alt: "YouTube" }),
                    }),
                  }),
                  (0, N.jsx)("li", {
                    children: (0, N.jsx)(_.Z, {
                      rel: "nofollow",
                      id: "LinkedIn",
                      url: "https://www.linkedin.com/company/digitalocean/",
                      children: (0, N.jsx)(n.Z, { src: v, alt: "LinkedIn" }),
                    }),
                  }),
                  (0, N.jsx)("li", {
                    children: (0, N.jsx)(_.Z, {
                      rel: "nofollow",
                      id: "Dev.to",
                      url: "https://dev.to/digitalocean",
                      children: (0, N.jsx)(n.Z, { src: x, alt: "Dev.to" }),
                    }),
                  }),
                  (0, N.jsx)("li", {
                    children: (0, N.jsx)(_.Z, {
                      rel: "nofollow",
                      id: "GlassDoor",
                      url: "https://www.glassdoor.com/Overview/Working-at-DigitalOcean-EI_IE823482.11,23.htm",
                      children: (0, N.jsx)(n.Z, { src: y, alt: "GlassDoor" }),
                    }),
                  }),
                  (0, N.jsx)("li", {
                    children: (0, N.jsx)(_.Z, {
                      rel: "nofollow",
                      id: "BuiltInNYC",
                      url: "https://www.builtinnyc.com/company/digitalocean",
                      children: (0, N.jsx)(n.Z, { src: g, alt: "BuiltInNYC" }),
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        D = (0, o.ZP)("div").withConfig({
          displayName: "CompanyDetails___StyledDiv",
          componentId: "sc-1htbdb3-0",
        })(["", ""], Z),
        F = (0, o.ZP)("div").withConfig({
          displayName: "CompanyDetails___StyledDiv2",
          componentId: "sc-1htbdb3-1",
        })(["", ""], S),
        L = (0, o.ZP)("ul").withConfig({
          displayName: "CompanyDetails___StyledUl",
          componentId: "sc-1htbdb3-2",
        })(["", ""], P),
        W = e(71778),
        M = (0, o.iv)(["margin:0;li{margin-bottom:10px;}"]),
        A = (0, o.iv)(
          [
            "color:",
            ";font-size:20px;line-height:28px;margin:46px 0 24px;text-align:left;",
          ],
          d.ZP.gray8
        ),
        q = o.ZP.div.withConfig({
          displayName: "LinksStyles__FooterDesktop",
          componentId: "sc-wtwir7-0",
        })(
          ["display:flex;flex-wrap:wrap;width:100%;", "{display:none;}"],
          (0, r.X)(r.A.largePhone)
        ),
        E = o.ZP.div.withConfig({
          displayName: "LinksStyles__MobileFooterWrapper",
          componentId: "sc-wtwir7-1",
        })(
          [
            "display:none;width:100%;",
            "{display:flex;flex-wrap:wrap;margin-bottom:75px;}",
          ],
          (0, r.X)(r.A.largePhone)
        ),
        H = e(67294),
        R = "/_next/static/media/caretDown.1687f158.svg",
        T = "/_next/static/media/caretUp.7b2dc6a9.svg",
        O = (0, o.iv)(["margin:0;li{margin-bottom:10px;}"]),
        U =
          (o.ZP.div.withConfig({
            displayName: "MobileDropdownStyles__MobileFooterWrapper",
            componentId: "sc-4s8b1h-0",
          })(
            [
              "display:none;width:100%;",
              "{display:flex;flex-wrap:wrap;margin-bottom:75px;}",
            ],
            (0, r.X)(r.A.largePhone)
          ),
          o.ZP.div.withConfig({
            displayName: "MobileDropdownStyles__MobileFooterHeaderWrapper",
            componentId: "sc-4s8b1h-1",
          })([
            "display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:25px;width:100%;&:hover{cursor:pointer;}",
          ])),
        z = (0, o.iv)(
          ["border-bottom:solid 1px ", ";"],
          (0, d.E9)(d.ZP.white, 0.25)
        ),
        B = (0, o.iv)(["border-bottom:none;"]),
        X = o.ZP.div.withConfig({
          displayName: "MobileDropdownStyles__Caret",
          componentId: "sc-4s8b1h-2",
        })(["height:32px;width:32px;"]),
        Y = (0, o.iv)(
          ["color:", ";font-size:20px;line-height:28px;text-align:left;"],
          d.ZP.gray8
        ),
        G = o.ZP.div.withConfig({
          displayName: "MobileDropdownStyles__MobileFooterItems",
          componentId: "sc-4s8b1h-3",
        })(["width:100%;"]),
        $ = (0, o.iv)([
          "border-bottom:none;height:0;opacity:0;transition:visibility 0s,opacity 0.5s linear;visibility:hidden;",
        ]),
        V = (0, o.iv)(
          [
            "border-bottom:solid 1px ",
            ";height:auto;opacity:1;visibility:visible;",
          ],
          (0, d.E9)(d.ZP.white, 0.25)
        ),
        K = function (t) {
          var i = t.title,
            e = t.links,
            o = t.type,
            l = (0, H.useState)(!1),
            a = l[0],
            c = l[1];
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsxs)(Q, {
                onClick: function () {
                  return c(function (t) {
                    return !t;
                  });
                },
                $_css: a ? B : z,
                children: [
                  (0, N.jsx)(J, { renderAs: "h6", children: i }),
                  (0, N.jsx)(X, {
                    children: a
                      ? (0, N.jsx)(n.Z, { src: T, alt: "caret up" })
                      : (0, N.jsx)(n.Z, { src: R, alt: "caret down" }),
                  }),
                ],
              }),
              (0, N.jsx)(tt, {
                $_css2: a ? V : $,
                children: (0, N.jsx)(it, {
                  children:
                    null === e || void 0 === e
                      ? void 0
                      : e.map(function (t) {
                          return (0,
                          N.jsx)("li", { children: (0, N.jsx)(_.Z, { rel: "nofollow" === t.rel ? "nofollow" : null, url: t["".concat(o, "_link")], children: t["".concat(o, "_link_text")] }) }, t["".concat(o, "_link_text")]);
                        }),
                }),
              }),
            ],
          });
        },
        Q = (0, o.ZP)(U).withConfig({
          displayName: "MobileDropdown___StyledMobileFooterHeaderWrapper",
          componentId: "sc-1rdzvft-0",
        })(["", ""], function (t) {
          return t.$_css;
        }),
        J = (0, o.ZP)(W.Z).withConfig({
          displayName: "MobileDropdown___StyledHeading",
          componentId: "sc-1rdzvft-1",
        })(["", ""], Y),
        tt = (0, o.ZP)(G).withConfig({
          displayName: "MobileDropdown___StyledMobileFooterItems",
          componentId: "sc-1rdzvft-2",
        })(["", ""], function (t) {
          return t.$_css2;
        }),
        it = (0, o.ZP)("ul").withConfig({
          displayName: "MobileDropdown___StyledUl",
          componentId: "sc-1rdzvft-3",
        })(["", ""], O),
        et = "Company",
        ot = [
          {
            company_link_text: "About",
            company_link: "https://www.digitalocean.com/about",
            rel: "default",
          },
          {
            company_link_text: "Leadership",
            company_link:
              "https://investors.digitalocean.com/governance/executive-management/default.aspx",
            rel: "nofollow",
          },
          {
            company_link_text: "Blog",
            company_link: "https://www.digitalocean.com/blog",
            rel: "default",
          },
          {
            company_link_text: "Careers",
            company_link: "https://www.digitalocean.com/careers",
            rel: "default",
          },
          {
            company_link_text: "Customers",
            company_link: "https://www.digitalocean.com/customers",
            rel: "default",
          },
          {
            company_link_text: "Partners",
            company_link: "https://www.digitalocean.com/partners",
            rel: "default",
          },
          {
            company_link_text: "Channel Partners",
            company_link: "https://www.digitalocean.com/channel-partners",
            rel: "default",
          },
          {
            company_link_text: "Referral Program",
            company_link: "https://www.digitalocean.com/referral-program",
            rel: "default",
          },
          {
            company_link_text: "Press",
            company_link: "https://www.digitalocean.com/press",
            rel: "nofollow",
          },
          {
            company_link_text: "Legal",
            company_link: "https://www.digitalocean.com/legal",
            rel: "default",
          },
          {
            company_link_text: "Security",
            company_link: "https://www.digitalocean.com/security",
            rel: "default",
          },
          {
            company_link_text: "Investor Relations",
            company_link: "https://investors.digitalocean.com",
            rel: "default",
          },
          {
            company_link_text: "DO Impact",
            company_link: "https://www.digitalocean.com/impact",
            rel: "default",
          },
        ],
        lt = "Products",
        nt = [
          {
            product_link_text: "Products Overview",
            product_link: "https://www.digitalocean.com/products/",
            rel: "default",
          },
          {
            product_link_text: "Droplets",
            product_link: "https://www.digitalocean.com/products/droplets/",
            rel: "default",
          },
          {
            product_link_text: "Kubernetes",
            product_link: "https://www.digitalocean.com/products/kubernetes/",
            rel: "default",
          },
          {
            product_link_text: "App Platform",
            product_link: "https://www.digitalocean.com/products/app-platform",
            rel: "default",
          },
          {
            product_link_text: "Functions",
            product_link: "https://www.digitalocean.com/products/functions",
            rel: "default",
          },
          {
            product_link_text: "Cloudways",
            product_link: "https://www.cloudways.com?id=1227510",
            rel: "default",
          },
          {
            product_link_text: "Managed Databases",
            product_link:
              "https://www.digitalocean.com/products/managed-databases/",
            rel: "default",
          },
          {
            product_link_text: "Spaces",
            product_link: "https://www.digitalocean.com/products/spaces/",
            rel: "default",
          },
          {
            product_link_text: "Marketplace",
            product_link: "https://www.digitalocean.com/products/marketplace/",
            rel: "default",
          },
          {
            product_link_text: "Load Balancers",
            product_link:
              "https://www.digitalocean.com/products/load-balancer/",
            rel: "default",
          },
          {
            product_link_text: "Block Storage",
            product_link:
              "https://www.digitalocean.com/products/block-storage/",
            rel: "default",
          },
          {
            product_link_text: "Tools & Integrations",
            product_link:
              "https://www.digitalocean.com/products/tools-and-integrations/",
            rel: "default",
          },
          {
            product_link_text: "API",
            product_link: "https://docs.digitalocean.com/reference/api/",
            rel: "default",
          },
          {
            product_link_text: "Pricing",
            product_link: "https://www.digitalocean.com/pricing/",
            rel: "default",
          },
          {
            product_link_text: "Documentation",
            product_link: "https://docs.digitalocean.com/",
            rel: "default",
          },
          {
            product_link_text: "Release Notes",
            product_link: "https://docs.digitalocean.com/release-notes/",
            rel: "default",
          },
          {
            product_link_text: "Uptime",
            product_link:
              "https://www.digitalocean.com/products/uptime-monitoring",
            rel: "default",
          },
        ],
        at = "Community",
        ct = [
          {
            community_link_text: "Tutorials",
            community_link: "https://www.digitalocean.com/community/tutorials",
            rel: "default",
          },
          {
            community_link_text: "Q&A",
            community_link: "https://www.digitalocean.com/community/questions",
            rel: "default",
          },
          {
            community_link_text: "CSS-Tricks",
            community_link: "https://css-tricks.com/",
            rel: "default",
          },
          {
            community_link_text: "Write for DOnations",
            community_link:
              "https://www.digitalocean.com/community/pages/write-for-digitalocean",
            rel: "default",
          },
          {
            community_link_text: "Currents Research",
            community_link: "https://www.digitalocean.com/currents",
            rel: "nofollow",
          },
          {
            community_link_text: "Hatch Startup Program",
            community_link: "https://www.digitalocean.com/hatch",
            rel: "default",
          },
          {
            community_link_text: "deploy by DigitalOcean",
            community_link: "https://www.digitalocean.com/deploy",
            rel: "default",
          },
          {
            community_link_text: "Shop Swag",
            community_link: "http://store.digitalocean.com",
            rel: "nofollow",
          },
          {
            community_link_text: "Research Program",
            community_link: "https://www.digitalocean.com/research",
            rel: "default",
          },
          {
            community_link_text: "Open Source",
            community_link: "https://www.digitalocean.com/open-source",
            rel: "nofollow",
          },
          {
            community_link_text: "Code of Conduct",
            community_link:
              "https://www.digitalocean.com/community/pages/code-of-conduct",
            rel: "default",
          },
          {
            community_link_text: "Newsletter Signup",
            community_link: "https://www.digitalocean.com/community/newsletter",
            rel: "default",
          },
          {
            community_link_text: "Meetups",
            community_link:
              "https://www.meetup.com/pro/digitalocean/?utm_source=do_www",
            rel: "nofollow",
          },
        ],
        st = "Solutions",
        rt = [
          {
            solution_link_text: "Website Hosting",
            solution_link:
              "https://www.digitalocean.com/solutions/website-hosting",
            rel: "default",
          },
          {
            solution_link_text: "VPS Hosting",
            solution_link: "https://www.digitalocean.com/solutions/vps-hosting",
            rel: "default",
          },
          {
            solution_link_text: "Web & Mobile Apps",
            solution_link:
              "https://www.digitalocean.com/solutions/web-mobile-apps",
            rel: "default",
          },
          {
            solution_link_text: "Game Development",
            solution_link:
              "https://www.digitalocean.com/solutions/gaming-development",
            rel: "default",
          },
          {
            solution_link_text: "Streaming",
            solution_link: "https://www.digitalocean.com/solutions/streaming",
            rel: "default",
          },
          {
            solution_link_text: "VPN",
            solution_link: "https://www.digitalocean.com/solutions/vpn",
            rel: "default",
          },
          {
            solution_link_text: "SaaS Platforms",
            solution_link: "https://www.digitalocean.com/solutions/saas",
            rel: "default",
          },
          {
            solution_link_text: "Cloud Hosting for Blockchain",
            solution_link: "https://www.digitalocean.com/solutions/blockchain",
            rel: "default",
          },
          {
            solution_link_text: "Startup Resources",
            solution_link: "https://www.digitalocean.com/resources",
            rel: "default",
          },
        ],
        dt = "Contact",
        pt = [
          {
            contact_link_text: "Support",
            contact_link: "https://www.digitalocean.com/support",
            rel: "default",
          },
          {
            contact_link_text: "Sales",
            contact_link: "https://www.digitalocean.com/company/contact/sales",
            rel: "default",
          },
          {
            contact_link_text: "Report Abuse",
            contact_link: "https://www.digitalocean.com/company/contact#abuse",
            rel: "nofollow",
          },
          {
            contact_link_text: "System Status",
            contact_link: "https://status.digitalocean.com",
            rel: "nofollow",
          },
          {
            contact_link_text: "Share your ideas",
            contact_link: "https://ideas.digitalocean.com",
            rel: "nofollow",
          },
        ],
        mt = function () {
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsxs)(q, {
                children: [
                  (0, N.jsxs)("div", {
                    className: "column is-mobile is-half",
                    children: [
                      (0, N.jsx)(ut, { renderAs: "h6", children: et }),
                      (0, N.jsx)(wt, {
                        children:
                          null === ot || void 0 === ot
                            ? void 0
                            : ot.map(function (t) {
                                return (0,
                                N.jsx)("li", { children: (0, N.jsx)(_.Z, { rel: "nofollow" === t.rel ? "nofollow" : null, url: t.company_link, children: t.company_link_text }) }, t.company_link_text);
                              }),
                      }),
                    ],
                  }),
                  (0, N.jsxs)("div", {
                    className: "column",
                    children: [
                      (0, N.jsx)(_t, { renderAs: "h6", children: lt }),
                      (0, N.jsx)(ht, {
                        children:
                          null === nt || void 0 === nt
                            ? void 0
                            : nt.map(function (t) {
                                return (0,
                                N.jsx)("li", { children: (0, N.jsx)(_.Z, { rel: "nofollow" === t.rel ? "nofollow" : null, url: t.product_link, children: t.product_link_text }) }, t.product_link_text);
                              }),
                      }),
                    ],
                  }),
                  (0, N.jsxs)("div", {
                    className: "column is-mobile is-half",
                    children: [
                      (0, N.jsx)(gt, { renderAs: "h6", children: at }),
                      (0, N.jsx)(xt, {
                        children:
                          null === ct || void 0 === ct
                            ? void 0
                            : ct.map(function (t) {
                                return (0,
                                N.jsx)("li", { children: (0, N.jsx)(_.Z, { rel: "nofollow" === t.rel ? "nofollow" : null, url: t.community_link, children: t.community_link_text }) }, t.community_link_text);
                              }),
                      }),
                    ],
                  }),
                  (0, N.jsxs)("div", {
                    className: "column",
                    children: [
                      (0, N.jsx)(ft, { renderAs: "h6", children: st }),
                      (0, N.jsx)(yt, {
                        children:
                          null === rt || void 0 === rt
                            ? void 0
                            : rt.map(function (t) {
                                return (0,
                                N.jsx)("li", { children: (0, N.jsx)(_.Z, { rel: "nofollow" === t.rel ? "nofollow" : null, url: t.solution_link, children: t.solution_link_text }) }, t.solution_link_text);
                              }),
                      }),
                    ],
                  }),
                  (0, N.jsxs)("div", {
                    className: "column is-mobile is-half",
                    children: [
                      (0, N.jsx)(kt, { renderAs: "h6", children: dt }),
                      (0, N.jsx)(vt, {
                        children:
                          null === pt || void 0 === pt
                            ? void 0
                            : pt.map(function (t) {
                                return (0,
                                N.jsx)("li", { children: (0, N.jsx)(_.Z, { rel: "nofollow" === t.rel ? "nofollow" : null, url: t.contact_link, children: t.contact_link_text }) }, t.contact_link_text);
                              }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, N.jsxs)(E, {
                children: [
                  (0, N.jsx)(K, { title: et, links: ot, type: "company" }),
                  (0, N.jsx)(K, { title: lt, links: nt, type: "product" }),
                  (0, N.jsx)(K, { title: at, links: ct, type: "community" }),
                  (0, N.jsx)(K, { title: st, links: rt, type: "solution" }),
                  (0, N.jsx)(K, { title: dt, links: pt, type: "contact" }),
                ],
              }),
            ],
          });
        },
        ut = (0, o.ZP)(W.Z).withConfig({
          displayName: "Links___StyledHeading",
          componentId: "sc-iofqrm-0",
        })(["", ""], A),
        wt = (0, o.ZP)("ul").withConfig({
          displayName: "Links___StyledUl",
          componentId: "sc-iofqrm-1",
        })(["", ""], M),
        _t = (0, o.ZP)(W.Z).withConfig({
          displayName: "Links___StyledHeading2",
          componentId: "sc-iofqrm-2",
        })(["", ""], A),
        ht = (0, o.ZP)("ul").withConfig({
          displayName: "Links___StyledUl2",
          componentId: "sc-iofqrm-3",
        })(["", ""], M),
        gt = (0, o.ZP)(W.Z).withConfig({
          displayName: "Links___StyledHeading3",
          componentId: "sc-iofqrm-4",
        })(["", ""], A),
        xt = (0, o.ZP)("ul").withConfig({
          displayName: "Links___StyledUl3",
          componentId: "sc-iofqrm-5",
        })(["", ""], M),
        ft = (0, o.ZP)(W.Z).withConfig({
          displayName: "Links___StyledHeading4",
          componentId: "sc-iofqrm-6",
        })(["", ""], A),
        yt = (0, o.ZP)("ul").withConfig({
          displayName: "Links___StyledUl4",
          componentId: "sc-iofqrm-7",
        })(["", ""], M),
        kt = (0, o.ZP)(W.Z).withConfig({
          displayName: "Links___StyledHeading5",
          componentId: "sc-iofqrm-8",
        })(["", ""], A),
        vt = (0, o.ZP)("ul").withConfig({
          displayName: "Links___StyledUl5",
          componentId: "sc-iofqrm-9",
        })(["", ""], M),
        bt = function (t) {
          var i = t.footerWaveColor;
          return (0, N.jsxs)(N.Fragment, {
            children: [
              (0, N.jsx)(u, { color: i }),
              (0, N.jsx)(Ct, {
                className: "footer",
                children: (0, N.jsxs)("div", {
                  className: "container",
                  children: [
                    (0, N.jsx)(Zt, {
                      className: "columns",
                      breakpoint: "mobile",
                      "is-multiline": "false",
                      children: (0, N.jsx)(mt, {}),
                    }),
                    (0, N.jsx)(Pt, {
                      className: "columns",
                      breakpoint: "mobile",
                      "is-multiline": "false",
                      children: (0, N.jsx)(l.F, { color: "#76a5ff" }),
                    }),
                    (0, N.jsx)(St, {
                      className: "columns",
                      "is-multiline": "false",
                      children: (0, N.jsx)(I, {}),
                    }),
                  ],
                }),
              }),
              (0, N.jsxs)(w, {
                children: [
                  (0, N.jsx)("div", {
                    className: "seaFloorLeft",
                    children: (0, N.jsx)(n.Z, {
                      src: a,
                      alt: "Sea floor left",
                    }),
                  }),
                  (0, N.jsx)("div", {
                    className: "seaFloorMiddle",
                    children: (0, N.jsx)(n.Z, {
                      src: c,
                      alt: "Sea floor middle",
                    }),
                  }),
                  (0, N.jsx)("div", {
                    className: "seaFloorRight",
                    children: (0, N.jsx)(n.Z, {
                      src: s,
                      alt: "Sea floor right",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        jt = bt;
      bt.defaultProps = { footerWaveColor: null };
      var Ct = (0, o.ZP)("div").withConfig({
          displayName: "FooterWWW___StyledDiv",
          componentId: "sc-1cau9xa-0",
        })(["", ""], p),
        Zt = (0, o.ZP)("div").withConfig({
          displayName: "FooterWWW___StyledDiv2",
          componentId: "sc-1cau9xa-1",
        })(["", ""], m),
        Pt = (0, o.ZP)("div").withConfig({
          displayName: "FooterWWW___StyledDiv3",
          componentId: "sc-1cau9xa-2",
        })(["", ""], m),
        St = (0, o.ZP)("div").withConfig({
          displayName: "FooterWWW___StyledDiv4",
          componentId: "sc-1cau9xa-3",
        })(["", ""], m);
    },
  },
]);
