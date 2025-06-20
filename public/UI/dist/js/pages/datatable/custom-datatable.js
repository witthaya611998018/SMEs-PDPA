// Add Bootstrap form classes for batter design
(function(b) { "function" === typeof define && define.amd ? define(["jquery", "datatables.net"], function(a) { return b(a, window, document) }) : "object" === typeof exports ? module.exports = function(a, d) { a || (a = window); if (!d || !d.fn.dataTable) d = require("datatables.net")(a, d).$; return b(d, a, a.document) } : b(jQuery, window, document) })(function(b, a, d, m) {
    var f = b.fn.dataTable;
    b.extend(!0, f.defaults, {
        dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        renderer: "bootstrap"
    });
    b.extend(f.ext.classes, { sWrapper: "dataTables_wrapper container-fluid dt-bootstrap4", sFilterInput: "form-control form-control-sm", sLengthSelect: "form-control form-control-sm", sProcessing: "dataTables_processing card", sPageButton: "paginate_button page-item" });
    f.ext.renderer.pageButton.bootstrap = function(a, h, r, s, j, n) {
        var o = new f.Api(a),
            t = a.oClasses,
            k = a.oLanguage.oPaginate,
            u = a.oLanguage.oAria.paginate || {},
            e, g, p = 0,
            q = function(d, f) {
                var l, h, i, c, m = function(a) {
                    a.preventDefault();
                    !b(a.currentTarget).hasClass("disabled") &&
                        o.page() != a.data.action && o.page(a.data.action).draw("page")
                };
                l = 0;
                for (h = f.length; l < h; l++)
                    if (c = f[l], b.isArray(c)) q(d, c);
                    else {
                        g = e = "";
                        switch (c) {
                            case "ellipsis":
                                e = "&#x2026;";
                                g = "disabled"; break;
                            case "first":
                                e = k.sFirst;
                                g = c + (0 < j ? "" : " disabled"); break;
                            case "previous":
                                e = k.sPrevious;
                                g = c + (0 < j ? "" : " disabled"); break;
                            case "next":
                                e = k.sNext;
                                g = c + (j < n - 1 ? "" : " disabled"); break;
                            case "last":
                                e = k.sLast;
                                g = c + (j < n - 1 ? "" : " disabled"); break;
                            default:
                                e = c + 1, g = j === c ? "active" : "" }
                        e && (i = b("<li>", {
                            "class": t.sPageButton + " " + g,
                            id: 0 === r &&
                                "string" === typeof c ? a.sTableId + "_" + c : null
                        }).append(b("<a>", { href: "#", "aria-controls": a.sTableId, "aria-label": u[c], "data-dt-idx": p, tabindex: a.iTabIndex, "class": "page-link" }).html(e)).appendTo(d), a.oApi._fnBindAction(i, { action: c }, m), p++)
                    }
            },
            i;
        try { i = b(h).find(d.activeElement).data("dt-idx") } catch (v) {}
        q(b(h).empty().html('<ul class="pagination"/>').children("ul"), s);
        i !== m && b(h).find("[data-dt-idx=" + i + "]").focus()
    };
    return f
});