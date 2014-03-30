angular-transform-msword2003
============================
Directives which can be used  to transform JSON to MS Word 2003 XML. I'm using this project to see how usefull AngularJS is to perform data transformations using [angular-transform](https://github.com/TimSchlechter/angular-transform)

### Data:
<pre>
var data = {
    sections: [{
        title: 'First Chapter'
    }]
};
</pre>

### Template:
<pre>
&lt;document&gt;
	&lt;content&gt;
		&lt;at ng-repeat="section in sections"&gt;
			&lt;paragraph title="section.title"&gt;&lt;/paragraph&gt;
		&lt;/at&gt;
	&lt;/content&gt;	
&lt;/document&gt;
</pre>

### Transform:
<pre>
var result = angularTransform({
    data: data,
    template: template,
    modules: ['msword2003']
});
</pre>

### Result:
<pre>
&lt;?xml version="1.0" encoding="utf-8" standalone="yes" ?&gt;
&lt;?mso-application progid="Word.Document" ?&gt;
&lt;w:wordDocument xmlns:w="http://schemas.microsoft.com/office/word/2003/wordml" xmlns:wx="http://schemas.microsoft.com/office/word/2003/auxHint" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:aml="http://schemas.microsoft.com/aml/2001/core" xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" xml:space="preserve" w:embeddedObjPresent="no"&gt;
    &lt;w:body&gt;
        &lt;w:p xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0"&gt;
            &lt;w:pPr&gt;
                &lt;w:pStyle w:val="P1" /&gt;&lt;/w:pPr&gt;
            &lt;w:r&gt;
                &lt;w:t&gt;First Chapter&lt;/w:t&gt;
            &lt;/w:r&gt;
        &lt;/w:p&gt;
    &lt;/w:body&gt;
&lt;/w:wordDocument&gt;
</pre>

## Run tests
<pre>
npm install -g karma
npm install -g bower

bower install
npm install 

grunt build
karma start
</pre>

## Dependencies
Runtime:
* AngularJS
* [angular-transform](https://github.com/TimSchlechter/angular-transform)

Development: 
* Bower
* Grunt
* Karma
* AngularJS
* LoDash
* RequireJS