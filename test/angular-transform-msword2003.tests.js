define(
    [
        'angularTransform',
        'text!test/document.tpl.xml',
        'lodash'
    ],
    function(angularTransform, template, _) {
        'use strict';

        describe('angular-transform-msword2003', function() {

            describe('msWord2003', function() {
                it("first try", function() {
                    var data = {
                        sections: [{
                            title: 'First Chapter'                        
                        }]
                    };

                    var result = angularTransform({
                        data: data,
                        template: template,
                        modules: ['angular-transform-msword2003']
                    });

                    // Remove whitespace between tags                    
                    result = result.replace(/^\s*/g, '');
                    result = result.replace(/\s*$/g, '');
                    result = result.replace(/\>[\n\t ]+</g, '><');
                    expect(result).toBe('<?xml version="1.0" encoding="utf-8" standalone="yes" ?><?mso-application progid="Word.Document" ?><w:wordDocument xmlns:w="http://schemas.microsoft.com/office/word/2003/wordml" xmlns:wx="http://schemas.microsoft.com/office/word/2003/auxHint" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:aml="http://schemas.microsoft.com/aml/2001/core" xmlns:dt="uuid:C2F41010-65B3-11d1-A29F-00AA00C14882" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w10="urn:schemas-microsoft-com:office:word" xmlns:number="urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0" xml:space="preserve" w:embeddedObjPresent="no"><w:body><w:p xmlns:fo="urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0"><w:pPr><w:pStyle w:val="P1" /></w:pPr><w:r><w:t>First Chapter</w:t></w:r></w:p></w:body></w:wordDocument>');
                });
            });
        });
    }
);
