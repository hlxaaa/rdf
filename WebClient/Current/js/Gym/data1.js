﻿var orderField = 'KM'
var desc = true;
var listSort;
var defaultField = 'KM'
var page = 1;
var time;
var dateStr;

var lastName;
var ths = ''
var isAdd = true;

var gymId = 0;

$(document).ready(function () {
    $('.li-gym2').addClass('open')
    $('.a-data1').addClass('active')

    $('.select-gymId').change(function () {
        changePage(1);
    })

    changePage(1);
    $('.th-km').click();

})

function changePage(index) {
    page = index;
    listSort = new Array();

    $('.table th').each(function () {
        listSort.push($(this).attr('class'))
    })
    var data1 = {
        search: $('.input-search').val(),
        pageIndex: index,
        orderField: orderField,
        isDesc: desc,
        size: 1,
        gymId: $('.select-gymId').val()
    }

    jQuery.postNL('../gymAjax/GetGymDataAll', data1, function (data) {

        //var index = data.index;
        //var pages = data.pages;
        var h = '';
        var data = data.ListData;
        if (data.length == 0) {

            if ($('.table th').length > 1) {
                ths = $('.table tr:first').html();
            }
            $('.table tr').remove();

            $('.table tbody').append('<tr class="tr-del"><th>没有相关信息</th></tr>')
            $('.pagination').children().remove();
            return;
        }
        var hh = ''
        if ($('.table th').length < 2) {
            hh += `<tr>${ths}</tr>`;
            $('.table thead').append(hh);
        }
        for (var i = 0; i < data.length; i++) {
            var item = data[i]
            var orderNo = item.order == null ? "" : item.order
            var Url = item.Url == null ? "" : item.Url
            var UserName = item.UserName == null ? "" : item.UserName
            var CreateTime = item.createTime == null ? "" : item.createTime
            var XL = item.XL == null ? "" : item.XL
            var SD = item.SD == null ? "" : item.SD
            var CAL = item.CAL == null ? "" : item.CAL
            var KM = item.KM == null ? "" : item.KM
            var DRAG = item.DRAG == null ? "" : item.DRAG
            var WATT = item.WATT == null ? "" : item.WATT
            var TotalTime = item.TotalTime == null ? "" : item.TotalTime
            var id = item.id;

            h += `<tr><td class="center tds td-orderNo" title="${orderNo}">${orderNo}</td>
<td class="center tds td-Url" title="${Url}"><img class="table-img" src="${Url}?${GetTs()}"></td>
<td class="center tds td-UserName" title="${UserName}">${UserName}</td>
<td class="center tds td-CreateTime" title="${CreateTime}">${CreateTime}</td>
<td class="center tds td-KM" title="${KM}">${KM}</td>
<td class="center tds td-ZS" title="${DRAG}">${DRAG}</td>
<td class="center tds td-SD" title="${SD}">${SD}</td>
<td class="center tds td-WATT" title="${WATT}">${WATT}</td>
<td class="center tds td-KAL" title="${CAL}">${CAL}</td>
<td class="center tds td-XL" title="${XL}">${XL}</td>
<td class="center tds td-WATT" title="${TotalTime}">${TotalTime}</td>
<td class="text-center">
    <div class="btn-group" data-id=${id}>
        <button class="btn btn-xs btn-default" type="button"  title=""><i class="fa fa-pencil"></i></button>
        <button class="btn btn-xs btn-default" type="button" title=""><i class="fa fa-times"></i></button>
    </div>
</td></tr>`
        }
        h += ' </table>'
        $('.tr-del').remove();
        $('.table tbody tr').remove();
        $('.table').append(h);
        //$('.pagination').children().remove();
        //var h = getPageHtml(pages, index);
        //$('.pagination').append(h);
    })
}
