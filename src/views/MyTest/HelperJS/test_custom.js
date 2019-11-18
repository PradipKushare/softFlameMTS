    $(document).ready(function () {
        $('#keypad').fadeToggle('fast');
        $('#numBox').click(function () {
            $('#keypad').fadeToggle('fast');
        });

        $('.calkey').click(function () {
            var numBox = document.getElementById('inputAnswer');
            if (this.innerHTML == '') {
                if (numBox.value.length > 0)
                    numBox.value = numBox.value + this.innerHTML;
            } else
                numBox.value = numBox.value + this.innerHTML;
            $("#qlink_" + current_question).addClass("attempt");
            show_solved_count();
            submit_answer();
        });

        $('.calbtn').click(function () {
            if (this.innerHTML == 'BACKSPACE') {
                var numBox = document.getElementById('inputAnswer');
                if (numBox.value.length > 0) {
                    numBox.value = numBox.value.substring(0, numBox.value.length - 1);
                }
                $("#qlink_" + current_question).addClass("attempt");
            } else {
                $("#qlink_" + (current_question)).removeClass("attempt");
                document.getElementById('inputAnswer').value = '';
                clear_response();
            }

            show_solved_count();
            submit_answer();
        });
    });

    $(document).ready(function () {
        var refreshVal = function () {
            $('.calculator input[type=text]').val(Calculator.display);
        }

        $('div.key').click(function () {
            show_solved_count();
            onButtonPress.call(this);
            refreshVal();
        });

        $('.inputAnswer').keyup(function () {
            show_solved_count();
        });

    });

        var option_id = 0;
        var current_question = 0;
        var question_count =14;
        var question_id_array = [];
        var question_id_arr = [];
        var question_group_id_array = [];
        var current_qtime = 0;
            question_id_array.push('2eeca4f78f2a04a35057c1fa7918e23b');
            question_id_arr.push('0000000073');
            question_group_id_array.push('0000000011');
                question_id_array.push('5896021cf563bcd63f0c970982e94564');
            question_id_arr.push('0000000074');
            question_group_id_array.push('0000000011');
                question_id_array.push('64badd35233ba2cd4946368ef2f4cf57');
            question_id_arr.push('0000000075');
            question_group_id_array.push('0000000011');
                question_id_array.push('dc23b76a4d1e91ff4d772f9385439d75');
            question_id_arr.push('0000000076');
            question_group_id_array.push('0000000011');
                question_id_array.push('4757acbca48c751a62c335e0b3e49d3d');
            question_id_arr.push('0000000077');
            question_group_id_array.push('0000000011');
                question_id_array.push('47a73e45ef4d15d753eb61afde0c0f84');
            question_id_arr.push('0000000078');
            question_group_id_array.push('0000000011');
                question_id_array.push('57316020e03f24759dce0fedeab4caa6');
            question_id_arr.push('0000000079');
            question_group_id_array.push('0000000011');
                question_id_array.push('df53941cb327a478eef11e80e41ae099');
            question_id_arr.push('0000000080');
            question_group_id_array.push('0000000011');
                question_id_array.push('0d5b735cf51c55f28f6c919eecaaec39');
            question_id_arr.push('0000000081');
            question_group_id_array.push('0000000011');
                question_id_array.push('78cc57defac02aef71a6c96b1f93ee35');
            question_id_arr.push('0000000082');
            question_group_id_array.push('0000000011');
                question_id_array.push('64fb66609e50ae65bcc37a6b8eb710bb');
            question_id_arr.push('0000000083');
            question_group_id_array.push('0000000011');
                question_id_array.push('2b03cae5e6e10df30be4cc195bd967c3');
            question_id_arr.push('0000000084');
            question_group_id_array.push('0000000011');
                question_id_array.push('6232e0ec62a1cc1ca817d713bbaa183c');
            question_id_arr.push('0000000085');
            question_group_id_array.push('0000000011');
                question_id_array.push('c520c8b8f5da02ce2812836bc8320648');
            question_id_arr.push('0000000086');
            question_group_id_array.push('0000000011');
                question_id_array.push('99976656418bd5b326a03ac2182a6087');
            question_id_arr.push('0000000087');
            question_group_id_array.push('0000000011');


        function clear_response()
        {
            $("#qlink_" + current_question).removeClass("attempt");
//                                               
            show_solved_count();

            var parameters = {
                question_id: question_id_array[current_question],
                test_id: 'e2f0d489e103ffe1f70d7b31559552fd',
                package_id: '0000000001',
                question_no: current_question,
            };

            $.ajax({
                type: "POST",
                url: "http://12mts.mocktestseries.in/take_test/clear_responce/",
                cache: false,
                data: parameters,
                success: function (data) {
                    $("#inputAnswer").val("");
                    $("input:radio").removeProp("checked");
                    load_question(current_question);
                },
                error: function (result) {
                }
            });


        }

        function show_next()
        {
            $("#qlink_" + current_question).removeClass("active");
            submit_answer();
            if (current_question == question_count)
            {
               
                submit_answer();

            } else
            {
                current_question++;
            }

            load_question(current_question);
            $("#qlink_" + current_question).addClass("active");
            change_group_onqload();

        }
        function show_pre()
        {
            $("#qlink_" + current_question).removeClass("active");
            submit_answer();
            if (current_question == 0)
            {
                current_question = question_count;
            } else
            {
                current_question--;
            }
            load_question(current_question);
            $("#qlink_" + current_question).addClass("active");
            change_group_onqload();
        }



        function show_question(question_no)
        {
            submit_answer();
            $('#myModal').modal('hide');
            $("#qlink_" + current_question).removeClass("active");
            current_question = question_no;
            load_question(current_question);
            $("#qlink_" + current_question).addClass("active");

        }
        var currentRequestLoad = null;
        function load_question(question_no)
        {
            var question_id = question_id_array[question_no];
            question_no += 1;
            $("#question-bx").html("Loading Question...");
            currentRequestLoad = jQuery.ajax({
                type: "POST",
                url: "http://12mts.mocktestseries.in/take_test/ajax_load_question/" + question_id + "/" + question_no + "/e2f0d489e103ffe1f70d7b31559552fd/0000000001",
                dataType: "json",
                cache: false,
                beforeSend: function () {
                    if (currentRequestLoad != null) {
                        currentRequestLoad.abort();
                    }
                },
                success: function (data) {


                    if (data.result == "success")
                    {
                        $("#qhead").html(data.header);
                        $("#question-bx").html(data.body);
                        $("#type").html(data.question_type);

                        current_qtime = parseInt(data.current_qtime);
                        if (current_qtime != 0)
                            current_qtime++;

                        qtime_start = current_qtime;
                        qstart_time = new Date();
                        var math = document.getElementById("question-bx");
                        MathJax.Hub.Queue(["Typeset", MathJax.Hub, math]);

                    } else
                    {
                        alert("Invalid question number.");
                    }
                },
                error: function (result) {
                }
            });
        }
        var input_answer = 0;
        var end_time = new Date('2019,11,06,09,37,34')
        var current_time = new Date('2019,11,06,09,12,34');
        var time_remaining = Math.round((end_time - current_time) / 1000);
        var qtime_start = 0;
        var qstart_time;
        var currentRequestcheck_time = null;
        function check_time()
        {
            var seconds = time_remaining;
            var hours = Math.floor(seconds / 3600);
            seconds %= 3600;
            var minutes = Math.floor(seconds / 60);
            seconds %= 60;

            if (time_remaining >= 0)
            {
                var timestring = hours < 10 ? "0" + hours : hours;
                timestring += minutes < 10 ? ":0" + minutes : ":" + minutes;
                timestring += seconds < 10 ? ":0" + seconds : ":" + seconds;

                $("#time_remaining").html(timestring);
                currentRequestcheck_time = jQuery.ajax({
                    type: "POST",
                    url: "http://12mts.mocktestseries.in/take_test/ajax_check_time/",
                    data: {time_remaining: time_remaining},
                    dataType: "json",
                    cache: false,
                    beforeSend: function () {
                        if (currentRequestcheck_time != null) {
                            currentRequestcheck_time.abort();
                        }
                    },
                    success: function ()
                    {

                    }
                });
            }
            if (time_remaining == 0)
            {
                clearInterval(check_time);
                var option_id = "";
                if ($(".option_id:checked").length > 0){
                    option_id = $(".option_id:checked").val();
                }

                var parameters = {
                    question_id: question_id_array[current_question],
                    answer_id: option_id,
                    test_id: 'e2f0d489e103ffe1f70d7b31559552fd',
                    package_id: '0000000001',
                    question_no: current_question,
                    current_qtime: current_qtime == 0 ? 1 : current_qtime,
                };

                currentRequestcheck_time = jQuery.ajax({
                    type: "POST",
                    url: "http://12mts.mocktestseries.in/take_test/ajax_give_answer/",
                    cache: false,
                    data: parameters,
                    beforeSend: function () {
                        if (currentRequestcheck_time != null) {
                            currentRequestcheck_time.abort();
                        }
                    },
                    success: function (data) {
                        location.href = 'http://12mts.mocktestseries.in/take_test/test_summary/e2f0d489e103ffe1f70d7b31559552fd';
                    },
                    error: function (result) {
                        location.href = 'http://12mts.mocktestseries.in/take_test/test_summary/e2f0d489e103ffe1f70d7b31559552fd';
                    }
                });
            }
            time_remaining--;
        }

        function hexByteStringToByteArray(hexByteString) {
            var bytes = new Array(16); 
            for (var i = 0; i < hexByteString.length; ) {
                var hexByte = hexByteString[i++] + hexByteString[i++];
                var byte = parseInt(hexByte, 16);
                bytes[i / 2 - 1] = byte;
            }
            return bytes;
        }

        function flag_question()
        {
            var parameters = {
                question_id: question_id_array[current_question],
                test_id: 'e2f0d489e103ffe1f70d7b31559552fd',
                package_id: '0000000001',
            };
            $.ajax({
                type: "POST",
                url: "http://12mts.mocktestseries.in/take_test/ajax_set_flaged/",
                cache: false,
                data: parameters,
                success: function (data) {
                    $("#qlink_" + current_question).addClass("review");
                    $("#btnUnflag").show();
                    $("#btnFlag").hide();
                    show_solved_count();
                    if (data != ""){
                        alert(data);
                    }
                    
                },
                error: function (result) {
                }
            });
        }


        function show_flaged()
        {
            var parameters = {
                question_id_array: question_id_array,
                test_id: 'e2f0d489e103ffe1f70d7b31559552fd',
                package_id: '0000000001'
            };
            $.ajax({
                type: "POST",
                url: "http://12mts.mocktestseries.in/take_test/ajax_show_flaged/",
                cache: false,
                data: parameters,
                success: function (data) {

                    $("#questions-number").html(data);
                    $('#myModal').modal('show');

                    show_solved_count();

                },
                error: function (result) {
                }
            });
        }

        function unflag_question()
        {
            var parameters = {
                question_id: question_id_array[current_question],
                test_id: 'e2f0d489e103ffe1f70d7b31559552fd',
                package_id: '0000000001'
            };
            $.ajax({
                type: "POST",
                url: "http://12mts.mocktestseries.in/take_test/ajax_delete_flag/",
                cache: false,
                data: parameters,
                success: function (data) {
                    $("#qlink_" + current_question).removeClass("review");
                    $("#btnUnflag").hide();
                    $("#btnFlag").show();
                    show_solved_count();

                },
                error: function (result) {
                }
            });
        }

        function show_solved_count()
        {
            solved_question_count = $("#questions-number .attempt").length;
            $("#solved_question_count").html(solved_question_count);

            flaged_question_count = $("#questions-number .review").length;
            $("#flaged_question_count").html(flaged_question_count);

            remaining_question_count = question_count + 1 - solved_question_count;
            $("#remaining_question_count").html(remaining_question_count);
        }
        var currentRequest = null;
        function submit_answer()
        {
            var option_id = 0;
            var q_type = "";
            var input_option_id = "";

            if ($(".option_id:checked").length > 0)
            {
                option_id = $(".option_id:checked").val();
                q_type = "single_choice";
            } else
            {
                input_answer = $("#inputAnswer").val();
                input_option_id = $("#input_option_id").val();
                if (input_answer != "")
                {
                    option_id = input_option_id;
                    input_answer = $("#inputAnswer").val();
                    q_type = "fill_in_blank";
                }


            }

            var parameters = {
                question_id: question_id_array[current_question],
                answer_id: option_id,
                test_id: 'e2f0d489e103ffe1f70d7b31559552fd',
                package_id: '0000000001',
                question_no: current_question,
                q_type: q_type,
                input_answer: input_answer,
                current_qtime: current_qtime == 0 ? 1 : current_qtime
            };

            currentRequest = jQuery.ajax({
                type: "POST",
                url: "http://12mts.mocktestseries.in/take_test/ajax_give_answer/",
                cache: false,
                data: parameters,
                beforeSend: function () {
                    if (currentRequest != null) {
                        currentRequest.abort();
                    }
                },
                success: function (data) {
                },
                error: function (result) {
                }
            });

        }

        function set_answer_given()
        {
            $("#qlink_" + current_question).addClass("attempt");
            show_solved_count();
        }
        function update2_current_qtime()
        {
            var parameters = {
                question_id: question_id_array[current_question],
                test_id: 'e2f0d489e103ffe1f70d7b31559552fd',
                current_qtime: current_qtime
            };

            $.ajax({
                type: "POST",
                url: "http://12mts.mocktestseries.in/take_test/ajax_set_current_time/",
                cache: false,
                data: parameters,
                success: function (data) {


                },
                error: function (result) {
                }
            });
        }

        function change_group_onqload()
        {
            var test_group_id = question_group_id_array[current_question];
            var selected_group_id = $("#test_groups").val();
            if (selected_group_id != "" && selected_group_id != test_group_id)
            {
                $("#questions-number a").hide();
                $("#questions-number [test_group_id='" + test_group_id + "']").show();
                $("#test_groups").val(test_group_id);
            }
        }

        function end_test()
        {
            $('#exitModal').modal('show');
        }

        function end_test_confirm()
        {
            clearInterval(check_time);
            clearInterval(update_question_time);

            var option_id = "";
            if ($(".option_id:checked").length >= 0)
            {
                option_id = $(".option_id:checked").val();
            }

            var parameters = {
                question_id: question_id_array[current_question],
                answer_id: option_id,
                test_id: 'e2f0d489e103ffe1f70d7b31559552fd',
                package_id: '0000000001',
                question_no: current_question,
                current_qtime: current_qtime == 0 ? 0 : current_qtime
            };
            $("body").html("<center><h2 style=\"color:#069;\">Your test is being submitted.</h2><br><br>" +
                    "<h3>Please wait and do not close this window.</h3><br>" +
                    "<img src=\"http://12mts.mocktestseries.in/site_data/raw/images/ajax-loader.gif\" alt=\"redirect\"></center>");
            $.ajax({
                type: "POST",
                url: "http://12mts.mocktestseries.in/take_test/ajax_give_answer/",
                cache: false,
                data: parameters,
                success: function (data) {

                    location.href = 'http://12mts.mocktestseries.in/take_test/test_summary/e2f0d489e103ffe1f70d7b31559552fd';
                },
                error: function (result) {
                    location.href = 'http://12mts.mocktestseries.in/take_test/test_summary/e2f0d489e103ffe1f70d7b31559552fd';
                }
            });


        }

        function confirm_close_window()
        {
            $('#closeWindowModal').modal('show');
        }

        function update_question_time()
        {
            var current_question_time = new Date();
            var question_time = Math.round((current_question_time - qstart_time) / 1000);
            current_qtime = qtime_start + question_time;

            $("#qtime").html(current_qtime);
        }
        $(document).ready(function (e) {
            load_question(0);
            show_solved_count();
                                                                        setInterval(check_time, 1000);
            setInterval(update_question_time, 1000);

        });

        window.onunload = function () {

            confirm_close_window();
            window.opener.reload_window()
        };
        function calculator() {
            var myWindow = window.open("http://12mts.mocktestseries.in/calci/index.htm", 'calculator', "width=480,height=340");


                                                }

                                          