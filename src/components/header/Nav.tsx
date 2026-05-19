"use client"


import Image from 'next/image';
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

function NavItem() {
    const t = useTranslations("Header");
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const switchLanguage = (newLocale: "en" | "ar") => {
        router.replace(pathname, { locale: newLocale });
    };
    return (
        <div>
            <nav>
                <ul className="parent-nav">
                    <li className="parent has-dropdown">
                        <Link className="nav-link" href="#">
                            {t("home")}
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link className="sub-b" href="/">
                                    {t("home")}
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/index-two">
                                    {t("home")}
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/index-three">
                                    {t("home")}
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/index-four">
                                    {t("home")}
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/index-five">
                                    {t("home")}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="parent">
                        <Link href="/about">{t("about")}</Link>
                    </li>
                    <li className="parent with-megamenu">
                        <Link href="#">{t("shop")}</Link>
                        <div className="rts-megamenu">
                            <div className="wrapper">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="megamenu-item-wrapper">
                                            {/* single item areas start */}
                                            <div className="single-megamenu-wrapper">
                                                <p className="title">Shop Layout</p>
                                                <ul>
                                                    <li>
                                                        <Link href="/shop">
                                                            Shop Grid Sidebar
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-list-sidebar">
                                                            Shop list Sidebar
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-grid-top-filter">
                                                            Shop Top Filter Grid
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/shop-list-top-filter">
                                                            Shop Top Filter List
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* single item areas end */}
                                            {/* single item areas start */}
                                            <div className="single-megamenu-wrapper">
                                                <p className="title">Shop Details</p>
                                                <ul>
                                                    <li>
                                                        <Link
                                                            className="sub-b"
                                                            href="/shop/firebase-business-makes-your-profit"
                                                        >
                                                            Shop Details
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="sub-b"
                                                            href="/shop-details-2"
                                                        >
                                                            Shop Details V2
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="sub-b"
                                                            href="/shop-details-right-sidebar"
                                                        >
                                                            Shop Details V3
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="sub-b"
                                                            href="/shop-details-4"
                                                        >
                                                            Shop Details V4
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* single item areas end */}
                                            {/* single item areas start */}
                                            <div className="single-megamenu-wrapper">
                                                <p className="title">Product Feature</p>
                                                <ul>
                                                    <li>
                                                        <Link
                                                            className="sub-b"
                                                            href="/shop-details-variable"
                                                        >
                                                            Variable product
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="sub-b"
                                                            href="/shop-details-affiliats"
                                                        >
                                                            Affiliate product
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="sub-b"
                                                            href="/shop-compare"
                                                        >
                                                            Shop Compare
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* single item areas end */}
                                            {/* single item areas start */}
                                            <div className="single-megamenu-wrapper">
                                                <p className="title">Shop Others</p>
                                                <ul>
                                                    <li>
                                                        <Link className="sub-b" href="/cart">
                                                            Cart
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link className="sub-b" href="/checkout">
                                                            Checkout
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            className="sub-b"
                                                            href="/trackorder"
                                                        >
                                                            Track Order
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            {/* single item areas end */}
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <Link
                                            href="/shop"
                                            className="feature-add-megamenu-area"
                                        >
                                            <Image
                                                src="/assets/images/feature/05.jpg"
                                                alt="feature_product"
                                             width={500} height={500}/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="parent has-dropdown">
                        <Link className="nav-link" href="#">
                            {t("vendors")}
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link className="sub-b" href="/vendor-list">
                                    Vendor List
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/vendor-grid">
                                    Vendor Grid
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/vendor-details">
                                    Vendor Details
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="parent has-dropdown">
                        <Link className="nav-link" href="#">
                            {t("pages")}
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link className="sub-b" href="/dashboard">
                                    Dashboard
                                    <span className="badge">( New )</span>
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/store">
                                    Store
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/faq">
                                    Faq's
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/invoice">
                                    Invoice
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/register">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/login">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/privacy-policy">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/cookies-policy">
                                    Cookies Policy
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/terms-condition">
                                    Terms &amp; Condition
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/404">
                                    Error
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="parent has-dropdown">
                        <Link className="nav-link" href="#">
                            {t("blog")}
                        </Link>
                        <ul className="submenu">
                            <li>
                                <Link className="sub-b" href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="sub-b"
                                    href="/blog-list-left-sidebar"
                                >
                                    Blog List Left Sidebar
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className="sub-b"
                                    href="/blog-list-right-sidebar"
                                >

                                    Blog List Right Sidebar
                                </Link>
                            </li>
                            <li>
                                <Link className="sub-b" href="/blog/details-profitable-business-makes-your-profit">
                                    Blog Details
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="parents">
                        <Link target='_blank' href="/dashboard">
                            {t("dashboard")}
                            <span className="badge">New</span>
                        </Link>
                    </li>
                    <li className="parent">
                        <Link href="/contact">{t("contact")}</Link>
                    </li>
                    <li className="parent" style={{ display: "flex", alignItems: "center" }}>
                        <button
                            onClick={() => switchLanguage(locale === "en" ? "ar" : "en")}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "6px",
                                fontWeight: "600",
                                fontSize: "15px",
                                textTransform: "capitalize",
                                color: "#1c1d1f",
                                padding: "0",
                                fontFamily: "inherit"
                            }}
                        >
                            <i className="fa-regular fa-globe" style={{ fontSize: "16px" }} />
                            <span>{locale === "en" ? "العربية" : "English"}</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavItem;