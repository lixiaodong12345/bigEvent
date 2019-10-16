var article = {
  // 获取文章类别 category
  getCate: function (options) {
    $.ajax({
      url: ARTICLE_CATE_GET,
      success: options.callback
    });
  },

  // 新增文章类别
  addCate: function (options) {
    $.ajax({
      type: 'post',
      url: ARTICLE_CATE_ADD,
      data: options.data,
      success: options.callback
    });
  },

  // 编辑文章类别
  editCate: function (options) {
    $.ajax({
      type: 'post',
      url: ARTICLE_CATE_EDIT,
      data: options.data,
      success: options.callback
    });
  },

  // 删除文章类别:
  delCate: function (options) {
    $.ajax({
      type: 'post',
      url: ARTICLE_CATE_DEL,
      data: options.data,
      success: options.callback
    })
  }
};