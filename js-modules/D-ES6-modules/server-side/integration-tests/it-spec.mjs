import assert from 'assert';
import request from 'superagent';

describe('Tests d\'intégrations :', function() {
    it('le endpoint /logs devrait retourner une liste vide', function(done) {
        request
            .get('127.0.0.1:8080/logs')
            .end(function(err, res){
                assert.ifError(err);
                assert.deepEqual({ logs: [] }, res.body);
                done();
            });
    });

    it('le endpoint /add devrait calculer et retourner le résultat', function(done) {
        request
            .post('127.0.0.1:8080/add')
            .send({ a:'50', b: '105'})
            .end(function(err, res) {
                assert.ifError(err);
                assert.deepEqual({ sum: 155 }, res.body);
                done();
            });
    });

    it('le endpoint /logs devrait retourner le log du POST /add précédent', function(done) {
        request
            .get('127.0.0.1:8080/logs')
            .end(function(err, res){
                assert.ifError(err);
                assert.deepEqual({ logs: ['50 + 105 = 155'] }, res.body);
                done();
            });
    });
});
